const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { enviarEmailConfirmacao } = require("../utils/emailService");

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
        const userExists = User.some(user => user.email === dados.email.toLowerCase());
        if (userExists) return res.status(400).json({ erro: "Email já cadastrado" });

        // Hash da senha
        const hashedPassword = await bcrypt.hash(dados.senha, 10);

        // Criação dinâmica do usuário
        const baseUser = {
            email: dados.email.toLowerCase(),
            senha: hashedPassword,
            nome_completo: dados.nome_completo.trim(),
            telefone: dados.telefone.replace(/\D/g, ""),
            data_nascimento: new Date(dados.data_nascimento).toISOString(),
            role, 
            confirmado: false
        };

        let userCompleto;
        if (role === "residente") {
            userCompleto = {
                ...baseUser,
                numero_registro: dados.numero_registro,
                especialidade: dados.especialidade,
                supervisor_responsavel: dados.supervisor_responsavel,
                instituicao_formacao: dados.instituicao_formacao
            };
        } else if (role === "supervisor") {
            userCompleto = {
                ...baseUser,
                numero_registro: dados.numero_registro,
                especialidade: dados.especialidade,
                areas_supervisionadas: dados.areas_supervisionadas
            };
        } else if (role === "administrador") {
            userCompleto = {
                ...baseUser,
                cargo: dados.cargo,
                departamento: dados.departamento,
                permissoes: dados.permissoes
            };
        }

        User.push(userCompleto);

         // Gerar o token de confirmação
         const tokenConfirmacao = jwt.sign({ email: userCompleto.email }, 'secretkey-confirmacao', { expiresIn: '24h' });

         // Enviar o e-mail de confirmação
         await enviarEmailConfirmacao(userCompleto.email, tokenConfirmacao);
 
         // Retornar resposta para o usuário
         return res.status(201).json({ message: "Cadastro realizado com sucesso. Verifique seu e-mail para confirmar." });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ erro: "Erro interno ao cadastrar usuário" });
    }
};

exports.confirmarEmail = (req, res) => {
    try {
        const { token } = req.params;
        
        // Verifica se o token é válido
        jwt.verify(token, 'secretkey-confirmacao', (err, decoded) => {
            if (err) return res.status(400).json({ erro: "Token inválido ou expirado." });

            // Encontrar o usuário pelo email (o email é parte do payload do token)
            const usuario = User.find(u => u.email === decoded.email);
            if (!usuario) return res.status(404).json({ erro: "Usuário não encontrado." });

            // Atualiza o campo de usuário confirmado
            usuario.confirmado = true;

            // Retorna resposta positiva
            return res.status(200).json({ mensagem: "E-mail confirmado com sucesso!" });
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ erro: "Erro ao confirmar o e-mail." });
    }
};



exports.login = async (req, res) => {
    return res.status(200).json({data: User});
}
