const atividadeService = require('../services/activity.service');
const jwt = require("jsonwebtoken")
const UsuarioRepository = require('../repositories/usuario.repository');



const usuario = (req) => {
    return req.usuario;
}

/**
 * Cria as atividades
 * "residente_id": 1,
 * "setor_id": 1,
 * "data_atividade": "2025-05-20",
 * "descricao": "Atividade clínica no ambulatório",
 * "finalizada": false
 */
exports.criar = async (req, res, next) => {
    try {
        const atividade = await atividadeService.criar(req.body);
        res.status(201).json(atividade);
    } catch (err) {
        next(err);
    }
};

/**
 * "descricao": "Atividade alterada - plantão",
 * "finalizada": true
 */
exports.atualizar = async (req, res, next) => {
    try {
        const { id } = req.params;
        const atividade = await atividadeService.atualizar(Number(id), req.body,  usuario(req).id);
        res.json(atividade);
    } catch (err) {
        next(err);
    }
};


// Exclui a atividade através do Id
exports.excluir = async (req, res, next) => {
    try {
        const { id } = req.params;
        await atividadeService.excluir(Number(id));
        res.json({ mensagem: 'Atividade excluída com sucesso.' });
    } catch (err) {
        next(err);
    }
};

// Busca a atividade pelo seu Id
exports.buscarPorId = async (req, res, next) => {
    try {
        const { id } = req.params;
        const atividade = await atividadeService.buscarPorId(Number(id));
        if (!atividade) return res.status(404).json({ message: 'Atividade não encontrada' });
        res.json(atividade);
    } catch (err) {
        next(err);
    }
};

// Lista as atividades de um residente a partir de seu residente_id
exports.listarPorResidente = async (req, res, next) => {
    try {
        const { residenteId } = req.params;
        const atividades = await atividadeService.buscarPorResidente(Number(residenteId));
        res.json(atividades);
    } catch (err) {
        next(err);
    }
};

// Retorna todas as atividades pendentes de um residente
exports.pendentes = async (req, res, next) => {
    try {
        const { residenteId } = req.params;
        const resultado = await atividadeService.buscarPendentes(Number(residenteId));
        res.json(resultado);
    } catch (err) {
        next(err);
    }
};

// Retorna todas as atividades finalizadas de um residente
exports.listarFinalizadas = async (req, res, next) => {
    try {
        const { residenteId } = req.params;
        const resultado = await atividadeService.buscarFinalizadas(Number(residenteId));
        res.json(resultado);
    } catch (err) {
        next(err);
    }
};

// Retorna valores para estatísticos para serem apresentados em Dashboard
exports.estatisticas = async (req, res, next) => {
    try {
        const residenteId = Number(req.params.residenteId);
        const stats = await atividadeService.obterEstatisticas(residenteId);
        res.json(stats);
    } catch (err) {
        next(err);
    }
};

