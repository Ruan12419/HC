const User = require('../models/user.model');
const prisma = require('../config/db.config');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { enviarEmailConfirmacao, enviarEmailRecuperacao } = require("../utils/emailService");

const {
    validarCamposComuns,
    validarResidente,
    validarSupervisor,
    validarAdministrador
} = require("../utils/validationUtils");

exports.cadastrarUsuario = async (req, res) => {
    try {
        const dados = req.body;

        const erroComum = validarCamposComuns(dados);
        if (erroComum) return res.status(400).json({ erro: erroComum });

        const role = dados.role.toLowerCase();

        let erroRole;
        if (role === "residente") erroRole = validarResidente(dados);
        else if (role === "supervisor") erroRole = validarSupervisor(dados);
        else if (role === "administrador") erroRole = validarAdministrador(dados);

        if (erroRole) return res.status(400).json({ erro: erroRole });

        // Verifica se o email já existe
        const userExists = await prisma.usuario.findUnique({ where: { email: dados.email.toLowerCase() } });
        if (userExists) return res.status(400).json({ erro: "Email já cadastrado" });

        // Hash da senha
        const hashedPassword = await bcrypt.hash(dados.senha, 10);

        // Criação dinâmica do usuário base
        const baseUserData = {
            email: dados.email.toLowerCase(),
            senha_hash: hashedPassword,
            nome: dados.nome_completo.trim(),
            tipo: role,
            ativo: false,
            criado_em: new Date(),
        };

        let usuarioCriado;

        if (role === "residente") {
            usuarioCriado = await prisma.usuario.create({
                data: {
                    ...baseUserData,
                    residente: {
                        create: {
                            crm: dados.numero_registro,
                            especialidade: dados.especialidade,
                            ano_residencia: parseInt(dados.ano_residencia || 1),
                            setor: { connect: { id: dados.setor_id } }
                        }
                    }
                },
                include: { residente: true }
            });
        } else if (role === "supervisor") {
            usuarioCriado = await prisma.usuario.create({
                data: {
                    ...baseUserData,
                    supervisor: {
                        create: {
                            crm: dados.numero_registro,
                            setor: { connect: { id: dados.setor_id } }
                        }
                    }
                },
                include: { supervisor: true }
            });
        } else if (role === "administrador") {
            usuarioCriado = await prisma.usuario.create({
                data: {
                    ...baseUserData,
                    administrador: { create: {} }
                },
                include: { administrador: true }
            });
        }

        // Gerar token de confirmação
        const tokenConfirmacao = jwt.sign({ email: usuarioCriado.email }, process.env.JWT_SECRET, { expiresIn: '24h' });

        // Enviar o e-mail de confirmação
        await enviarEmailConfirmacao(usuarioCriado.email, tokenConfirmacao);

        return res.status(201).json({ message: "Cadastro realizado com sucesso. Verifique seu e-mail para confirmar." });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ erro: "Erro interno ao cadastrar usuário" });
    }
};

exports.confirmarEmail = async (req, res) => {
    try {
        const { token } = req.params;

        jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
            if (err) return res.status(400).json({ erro: "Token inválido ou expirado." });

            const usuario = await prisma.usuario.findUnique({ where: { email: decoded.email } });
            if (!usuario) return res.status(404).json({ erro: "Usuário não encontrado." });

            await prisma.usuario.update({
                where: { email: decoded.email },
                data: { ativo: true }
            });

            return res.status(200).json({ mensagem: "E-mail confirmado com sucesso!" });
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ erro: "Erro ao confirmar o e-mail." });
    }
};


exports.login = async (req, res) => {
    try {
        const { email, senha } = req.body;

        if (!email || !senha) {
            return res.status(400).json({ erro: "Email e senha são obrigatórios." });
        }

        // Busca o usuário pelo e-mail
        const usuario = await prisma.usuario.findUnique({
            where: { email: email.toLowerCase() },
            include: {
                residente: true,
                supervisor: true,
                administrador: false
            }
        });

        if (!usuario) {
            return res.status(404).json({ erro: "Usuário não encontrado." });
        }

        if (!usuario.ativo) {
            return res.status(403).json({ erro: "E-mail ainda não confirmado." });
        }

        const senhaCorreta = await bcrypt.compare(senha, usuario.senha_hash);
        if (!senhaCorreta) {
            return res.status(401).json({ erro: "Senha incorreta." });
        }

        // Gera o token JWT
        const token = jwt.sign({
            id: usuario.id,
            email: usuario.email,
            tipo: usuario.tipo
        }, process.env.JWT_SECRET, { expiresIn: '8h' });

        // Remove informações sensíveis antes de retornar os dados do usuário
        const { senha_hash, id, ativo, criado_em, ...usuarioSemSenha } = usuario;

        return res.status(200).json({
            mensagem: "Login realizado com sucesso.",
            token,
            usuario: usuarioSemSenha
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ erro: "Erro interno ao realizar login." });
    }
};




exports.recuperarSenha = async (req, res) => {
    const { email } = req.body;

    try {
        // Verifica se o usuário existe
        const usuario = await prisma.usuario.findUnique({
            where: { email }
        });

        if (!usuario) {
            return res.status(404).json({ erro: 'Usuário não encontrado.' });
        }

        // Cria o token com expiração de 1 hora
        const token = jwt.sign({ email: usuario.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Envia o e-mail de recuperação
        await enviarEmailRecuperacao(email, token);

        return res.status(200).json({ mensagem: 'E-mail de recuperação enviado!' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ erro: 'Erro ao enviar e-mail de recuperação.' });
    }
};

exports.redefinirSenha = async (req, res) => {
    const { token, novaSenha } = req.body;

    try {
        // Verifica o token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Encontra o usuário pelo e-mail
        const usuario = await prisma.usuario.findUnique({
            where: { email: decoded.email }
        });

        if (!usuario) {
            return res.status(404).json({ erro: 'Usuário não encontrado.' });
        }

        // Criptografa a nova senha
        const senhaHash = await bcrypt.hash(novaSenha, 10);

        // Atualiza a senha no banco de dados
        await prisma.usuario.update({
            where: { email: decoded.email },
            data: { senha_hash: senhaHash }
        });

        return res.status(200).json({ mensagem: 'Senha redefinida com sucesso!' });
    } catch (error) {
        console.error(error);
        return res.status(400).json({ erro: 'Token inválido ou expirado.' });
    }
};