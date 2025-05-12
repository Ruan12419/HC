const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UsuarioRepository = require('../repositories/usuario.repository');
const { enviarEmailConfirmacao, enviarEmailRecuperacao } = require("../utils/emailService");
const { validarCamposComuns, validarResidente, validarSupervisor, validarAdministrador } = require("../utils/validationUtils");

class UsuarioService {
    static async cadastrarUsuario(dados) {
        const erroComum = validarCamposComuns(dados);
        if (erroComum) throw new Error(erroComum);

        const role = dados.role.toLowerCase();
        let erroRole;
        if (role === "residente") erroRole = validarResidente(dados);
        else if (role === "supervisor") erroRole = validarSupervisor(dados);
        else if (role === "administrador") erroRole = validarAdministrador(dados);

        if (erroRole) throw new Error(erroRole);

        const userExists = await UsuarioRepository.findByEmail(dados.email.toLowerCase());
        if (userExists) throw new Error("Email já cadastrado");

        const hashedPassword = await bcrypt.hash(dados.senha, 10);

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
            usuarioCriado = await UsuarioRepository.createUsuario({
                ...baseUserData,
                residente: {
                    create: {
                        crm: dados.numero_registro,
                        especialidade: dados.especialidade,
                        ano_residencia: parseInt(dados.ano_residencia || 1),
                        setor: { connect: { id: dados.setor_id } }
                    }
                }
            });
        } else if (role === "supervisor") {
            usuarioCriado = await UsuarioRepository.createUsuario({
                ...baseUserData,
                supervisor: {
                    create: {
                        crm: dados.numero_registro,
                        setor: { connect: { id: dados.setor_id } }
                    }
                }
            });
        } else if (role === "administrador") {
            usuarioCriado = await UsuarioRepository.createUsuario({
                ...baseUserData,
                administrador: { create: {} }
            });
        }

        const tokenConfirmacao = jwt.sign({ email: usuarioCriado.email }, process.env.JWT_SECRET, { expiresIn: '24h' });

        await enviarEmailConfirmacao(usuarioCriado.email, tokenConfirmacao);

        return { message: "Cadastro realizado com sucesso. Verifique seu e-mail para confirmar." };
    }

    static async confirmarEmail(token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const usuario = await UsuarioRepository.findByEmail(decoded.email);
            if (!usuario) throw new Error("Usuário não encontrado.");

            await UsuarioRepository.updateUsuarioEmailStatus(decoded.email, true);
            return { mensagem: "E-mail confirmado com sucesso!" };
        } catch (error) {
            throw new Error("Token inválido ou expirado.");
        }
    }

    static async login(dados) {
        const { email, senha } = dados;

        if (!email || !senha) throw new Error("Email e senha são obrigatórios.");

        const usuario = await UsuarioRepository.findByEmail(email.toLowerCase());
        if (!usuario) throw new Error("Usuário não encontrado.");

        if (!usuario.ativo) throw new Error("E-mail ainda não confirmado.");

        const senhaCorreta = await bcrypt.compare(senha, usuario.senha_hash);
        if (!senhaCorreta) throw new Error("Senha incorreta.");

        const token = jwt.sign({
            id: usuario.id,
            email: usuario.email,
            tipo: usuario.tipo
        }, process.env.JWT_SECRET, { expiresIn: '8h' });

        const { senha_hash, id, ativo, criado_em, ...usuarioSemSenha } = usuario;

        return {
            mensagem: "Login realizado com sucesso.",
            token,
            usuario: usuarioSemSenha
        };
    }

    static async recuperarSenha(email) {
        const usuario = await UsuarioRepository.findByEmail(email);
        if (!usuario) throw new Error('Usuário não encontrado.');

        const token = jwt.sign({ email: usuario.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

        await enviarEmailRecuperacao(email, token);

        return { mensagem: 'E-mail de recuperação enviado!' };
    }

    static async redefinirSenha(token, novaSenha) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const usuario = await UsuarioRepository.findByEmail(decoded.email);
            if (!usuario) throw new Error('Usuário não encontrado.');

            const senhaHash = await bcrypt.hash(novaSenha, 10);
            await UsuarioRepository.updateUsuarioPassword(decoded.email, senhaHash);

            return { mensagem: 'Senha redefinida com sucesso!' };
        } catch (error) {
            throw new Error('Token inválido ou expirado.');
        }
    }
}

module.exports = UsuarioService;
