const repository = require('../repositories/activity.repositories');

exports.criar = async (dados) => {
    const existente = await repository.buscarPorAtividade(dados.residente_id, dados.data_atividade, dados.descricao);
    if (existente) throw new Error('Atividade já registrada para essa data.');

    return await repository.criarAtividade(dados);
};

exports.atualizar = async (id, dados) => {
    const atividade = await repository.buscarPorId(id);
    if (!atividade) throw new Error('Atividade não encontrada.');

    return await repository.atualizarAtividade(id, dados);
};

exports.excluir = async (id) => {
    const atividade = await repository.buscarPorId(id);
    if (!atividade) throw new Error('Atividade não encontrada.');

    return await repository.excluirAtividade(id);
};

exports.buscarPorResidente = async (residenteId) => {
    return await repository.listarPorResidente(residenteId);
};

exports.buscarPendentes = async (residenteId) => {
    return await repository.atividadesPendentes(residenteId);
};
