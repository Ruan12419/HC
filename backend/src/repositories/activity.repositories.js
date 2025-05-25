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
    if (dados.data_atividade) {
        dados.data_atividade = new Date(dados.data_atividade);
    }
    if (dados.data_finalizacao) {
        dados.data_finalizacao = new Date(dados.data_finalizacao);
    }
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

exports.atividadesFinalizadas = async (residenteId) => {

    const atividades = await prisma.atividade.findMany({
        where: { residente_id: residenteId, finalizada: true },
    });

    return { atividades };
};

exports.obterEstatisticas = async (residenteId) => {
  const [totais, porDescricao, grupoSetores] = await Promise.all([
    // Totais gerais
    Promise.all([
      prisma.atividade.count({ where: { residente_id: residenteId } }),
      prisma.atividade.count({
        where: { residente_id: residenteId, finalizada: true },
      }),
      prisma.atividade.count({
        where: { residente_id: residenteId, finalizada: false },
      }),
    ]),

    // Estatísticas por descrição
    prisma.atividade.groupBy({
      by: ['descricao'],
      where: { residente_id: residenteId },
      _count: true,
      orderBy: {
        _count: {
          descricao: 'desc',
        },
      },
    }),

    // Estatísticas por setor_id
    prisma.atividade.groupBy({
      by: ['setor_id'],
      where: { residente_id: residenteId },
      _count: true,
      orderBy: {
        _count: {
          setor_id: 'desc',
        },
      },
    }),
  ]);

  const [total, finalizadas, pendentes] = totais;

  // Pega os IDs únicos dos setores e busca os nomes
  const setorIds = grupoSetores.map((item) => item.setor_id);

  const setores = await prisma.setor.findMany({
    where: { id: { in: setorIds } },
    select: { id: true, nome: true },
  });

  const setoresComNome = grupoSetores.map((item) => {
    const setor = setores.find((s) => s.id === item.setor_id);
    return {
      setor: setor?.nome || 'Setor desconhecido',
      total: item._count,
    };
  });

  return {
    total,
    finalizadas,
    pendentes,
    porDescricao: porDescricao.map((item) => ({
      descricao: item.descricao,
      total: item._count,
    })),
    porSetor: setoresComNome,
  };
};

exports.listarAtividadesComFiltros = async (residenteId, filtros) => {
  const {
    page = 1,
    limit = 10,
    data_inicio,
    data_fim,
    finalizada,
    setor_id
  } = filtros;

  const skip = (page - 1) * limit;
  const take = parseInt(limit);

  const where = {
    residente_id: parseInt(residenteId),
    ...(finalizada !== undefined && { finalizada: finalizada === 'true' }),
    ...(setor_id && { setor_id: parseInt(setor_id) }),
    ...(data_inicio || data_fim
      ? {
          data_atividade: {
            ...(data_inicio && { gte: new Date(data_inicio) }),
            ...(data_fim && { lte: new Date(data_fim) }),
          }
        }
      : {})
  };

  const [atividades, total] = await Promise.all([
    prisma.atividade.findMany({
      where,
      skip,
      take,
      orderBy: { data_atividade: 'desc' }
    }),
    prisma.atividade.count({ where })
  ]);

  return {
    atividades,
    total,
    page: parseInt(page),
    limit: take,
    totalPages: Math.ceil(total / take)
  };
}

