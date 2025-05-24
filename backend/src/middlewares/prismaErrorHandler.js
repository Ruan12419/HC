module.exports = function prismaErrorHandler(err) {
  if (!err.code) return err;

  switch (err.code) {
    case 'P2000':
      err.status = 400;
      err.message = 'O valor fornecido é muito longo para um campo do banco de dados.';
      break;

    case 'P2001':
      err.status = 404;
      err.message = 'O registro especificado não foi encontrado.';
      break;

    case 'P2002':
      err.status = 400;
      err.message = 'Já existe um registro com os dados informados (violação de valor único).';
      break;

    case 'P2003':
      err.status = 400;
      if (err.meta?.field_name?.includes('residente_id')) {
        err.message = 'Residente informado não existe.';
      } else if (err.meta?.field_name?.includes('setor_id')) {
        err.message = 'Setor informado não existe.';
      } else {
        err.message = 'Violação de chave estrangeira.';
      }
      break;

    case 'P2004':
      err.status = 400;
      err.message = 'Violação de uma restrição no banco de dados (ex: CHECK).';
      break;

    case 'P2005':
      err.status = 400;
      err.message = 'Valor inválido para um campo do banco de dados.';
      break;

    case 'P2006':
      err.status = 400;
      err.message = 'Tipo de dado fornecido incorreto para o campo.';
      break;

    case 'P2007':
      err.status = 500;
      err.message = 'Dados inconsistentes no banco de dados.';
      break;

    case 'P2008':
      err.status = 500;
      err.message = 'Falha na validação do documento do Prisma (possível erro no schema).';
      break;

    case 'P2009':
      err.status = 500;
      err.message = 'Consulta inválida. Verifique os parâmetros enviados.';
      break;

    case 'P2010':
      err.status = 400;
      err.message = 'Consulta malformada enviada ao banco.';
      break;

    case 'P2011':
      err.status = 400;
      err.message = 'Violação de valor nulo em campo obrigatório.';
      break;

    case 'P2012':
      err.status = 400;
      err.message = 'Campo obrigatório não fornecido.';
      break;

    case 'P2013':
      err.status = 400;
      err.message = 'Argumentos insuficientes para a operação.';
      break;

    case 'P2014':
      err.status = 400;
      err.message = 'A relação entre os registros está mal formada.';
      break;

    case 'P2015':
      err.status = 404;
      err.message = 'Registro não encontrado na operação.';
      break;

    case 'P2016':
      err.status = 500;
      err.message = 'Consulta inválida no Prisma. Pode indicar problema no schema.';
      break;

    case 'P2017':
      err.status = 500;
      err.message = 'Relacionamento entre registros corrompido.';
      break;

    case 'P2018':
      err.status = 400;
      err.message = 'O campo fornecido na relação não é válido.';
      break;

    case 'P2021':
      err.status = 500;
      err.message = 'A tabela especificada não foi encontrada no banco.';
      break;

    case 'P2022':
      err.status = 500;
      err.message = 'A coluna especificada não foi encontrada no banco.';
      break;

    case 'P2023':
      err.status = 500;
      err.message = 'Erro ao interpretar a relação no banco.';
      break;

    case 'P2025':
      err.status = 404;
      err.message = 'Registro para atualizar ou deletar não encontrado.';
      break;

    case 'P2030':
      err.status = 400;
      err.message = 'Erro ao tentar modificar um campo que não pode ser atualizado diretamente.';
      break;

    default:
      err.status = 500;
      err.message = 'Erro inesperado do Prisma.';
  }

  return err;
};
