const prisma = require('../config/db.config');

exports.buscarPorData = async (residenteId, data) => {
    return await prisma.atividade.findUnique({
        where: { residente_id_data: { residente_id: residenteId, data } }
    });
};

exports.criarAtividade = async (dados) => {
    return await prisma.atividade.create({ data: dados });
};

exports.atualizarAtividade = async (id, dados) => {
    return await prisma.atividade.update({
        where: { id },
        data: dados
    });
};

exports.atividadesPendentes = async (semana, dia) => {
    const primeiroDia = new Date(semana, dia - 1, 1);
    const ultimoDia = new Date(semana, dia, 0);

    const atividades = await prisma.atividade.count({
        where: {
            data: {
                gte: primeiroDia,
                lte: ultimoDia,
            },
            finalizada: false,
        },
    });

    return { atividades };
};
