const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
            role
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

        const token = jwt.sign({ id: userCompleto.email }, 'secretkey', { expiresIn: '1h' });

        return res.status(201).json({ message: "Cadastro realizado com sucesso", token });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ erro: "Erro interno ao cadastrar usuário" });
    }
};


exports.login = async (req, res) => {
    return res.status(200).json({data: User});
}
