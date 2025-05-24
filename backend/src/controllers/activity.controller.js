const service = require('../services/activity.service');

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
        const atividade = await service.criar(req.body);
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
        const atividade = await service.atualizar(Number(id), req.body);
        res.json(atividade);
    } catch (err) {
        res.status(400).json({ erro: err.message });
    }
};


// Exclui a atividade através do Id
exports.excluir = async (req, res, next) => {
    try {
        const { id } = req.params;
        await service.excluir(Number(id));
        res.json({ mensagem: 'Atividade excluída com sucesso.' });
    } catch (err) {
        res.status(400).json({ erro: err.message });
    }
};

// Lista as atividades de um residente a partir de seu residente_id
exports.listarPorResidente = async (req, res, next) => {
    try {
        const { residenteId } = req.params;
        const atividades = await service.buscarPorResidente(Number(residenteId));
        res.json(atividades);
    } catch (err) {
        res.status(400).json({ erro: err.message });
    }
};

// Retorna todas as atividades pendentes de um residente
exports.pendentes = async (req, res, next) => {
    try {
        const { residenteId } = req.params;
        const resultado = await service.buscarPendentes(Number(residenteId));
        res.json(resultado);
    } catch (err) {
        next(err);
    }
};
