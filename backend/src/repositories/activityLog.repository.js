const prisma = require('../config/db.config');

exports.registrarLog = async ({ atividade_id, acao, dados_anteriores, dados_novos, usuario_id }) => {
  return await prisma.atividadeLog.create({
    data: {
      atividade_id,
      acao,
      dados_anteriores,
      dados_novos,
      usuario_id
    }
  });
};
