const prisma = require('../config/db.config');

exports.buscarPorAtividade = async (residente_id, data_atividade, descricao) => {
    return await prisma.atividade.findUnique({
        where: {
            residente_id_data_atividade_descricao: {
                residente_id,
                data_atividade: new Date(data_atividade), 
                descricao
            }
        }
    });
};

exports.criarAtividade = async (dados) => {
    dados.data_atividade = new Date(dados.data_atividade);
    return await prisma.atividade.create({ data: dados });
};

exports.atualizarAtividade = async (id, dados) => {
    return await prisma.atividade.update({
        where: { id },
        data: dados
    });
};

exports.excluirAtividade = async (id) => {
    return await prisma.atividade.delete({
        where: { id }
    });
};

exports.buscarPorId = async (id) => {
    return await prisma.atividade.findUnique({
        where: { id }
    });
};

exports.listarPorResidente = async (residenteId) => {
    return await prisma.atividade.findMany({
        where: { residente_id: residenteId },
        orderBy: { data_atividade: 'desc' }
    });
};

exports.atividadesPendentes = async (residenteId) => {

    const atividades = await prisma.atividade.findMany({
        where: { residente_id: residenteId, finalizada: false },
    });

    return { atividades };
};
