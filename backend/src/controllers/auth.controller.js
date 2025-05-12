const UsuarioService = require('../services/usuario.service');

exports.cadastrarUsuario = async (req, res) => {
    try {
        const dados = req.body;
        const response = await UsuarioService.cadastrarUsuario(dados);
        return res.status(201).json(response);
    } catch (error) {
        return res.status(400).json({ erro: error.message });
    }
};

exports.confirmarEmail = async (req, res) => {
    try {
        const { token } = req.params;
        const response = await UsuarioService.confirmarEmail(token);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json({ erro: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const dados = req.body;
        const response = await UsuarioService.login(dados);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json({ erro: error.message });
    }
};

exports.recuperarSenha = async (req, res) => {
    try {
        const { email } = req.body;
        const response = await UsuarioService.recuperarSenha(email);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json({ erro: error.message });
    }
};

exports.redefinirSenha = async (req, res) => {
    try {
        const { token, novaSenha } = req.body;
        const response = await UsuarioService.redefinirSenha(token, novaSenha);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json({ erro: error.message });
    }
};
