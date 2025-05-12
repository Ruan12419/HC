const prisma = require('../config/db.config');

exports.buscarPorData = async (residenteId, data) => {
    return await prisma.frequencia.findUnique({
        where: { residente_id_data: { residente_id: residenteId, data } }
    });
};

exports.criarFrequencia = async (dados) => {
    return await prisma.frequencia.create({ data: dados });
};

exports.atualizarFrequencia = async (id, dados) => {
    return await prisma.frequencia.update({
        where: { id },
        data: dados
    });
};

exports.presencasFaltasPorMes = async (mes, ano) => {
    const primeiroDia = new Date(ano, mes - 1, 1);
    const ultimoDia = new Date(ano, mes, 0);

    const presencas = await prisma.frequencia.count({
        where: {
            data: {
                gte: primeiroDia,
                lte: ultimoDia,
            },
            presente: true,
        },
    });

    const faltas = await prisma.frequencia.count({
        where: {
            data: {
                gte: primeiroDia,
                lte: ultimoDia,
            },
            presente: false,
        },
    });

    return { presencas, faltas };
};

exports.mediaHorariosChegadaPorMes = async (mes, ano) => {
    const primeiroDia = new Date(ano, mes - 1, 1);
    const ultimoDia = new Date(ano, mes, 0);

    const resultados = await prisma.frequencia.aggregate({
        where: {
            data: {
                gte: primeiroDia,
                lte: ultimoDia,
            },
            horario_chegada: {
                not: null,
            },
        },
        _avg: {
            horario_chegada: true,
        },
    });

    return resultados._avg.horario_chegada;
};

exports.rankingAssiduidadePorMes = async (mes, ano) => {
    const primeiroDia = new Date(ano, mes - 1, 1);
    const ultimoDia = new Date(ano, mes, 0);

    const diasUteisNoMes = ultimoDia.getDate();

    const ranking = await prisma.residente.findMany({
        orderBy: {
            frequencias: {
                _count: 'desc',
            },
        },
        where: {
            frequencias: {
                some: {
                    data: {
                        gte: primeiroDia,
                        lte: ultimoDia,
                    },
                    presente: true,
                },
            },
        },
    });

    return ranking.map((residente) => ({
        residente_id: residente.id,
        nome: residente.nome,
        dias_presentes: residente.frequencias.filter((freq) => freq.presente).length,
        assiduidade: residente.frequencias.filter((freq) => freq.presente).length / diasUteisNoMes * 100,
    }));
};
