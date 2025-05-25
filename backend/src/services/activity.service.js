const prisma = require("../config/db.config");
const repository = require("../repositories/activity.repositories");
const logRepository = require("../repositories/activityLog.repository");
const UsuarioRepository = require("../repositories/usuario.repository");
const {
  verificarSeSupervisorTemAcesso,
  verificarSeResidenteEstaAcessandoProprioRegistro,
  verificarPermissaoParaResidente,
} = require("../utils/activity.permissions");

exports.criar = async (dados, usuario) => {
  if (usuario.tipo === "RESIDENTE") {
    verificarSeResidenteEstaAcessandoProprioRegistro(
      usuario,
      dados.residente_id
    );
  }

  if (usuario.tipo === "SUPERVISOR") {
    await verificarSeSupervisorTemAcesso(usuario, dados.residente_id);
  }

  const existente = await repository.buscarPorAtividade(
    dados.residente_id,
    dados.data_atividade,
    dados.descricao
  );
  if (existente) throw new Error("Atividade já registrada para essa data.");

  return await repository.criarAtividade(dados);
};

exports.atualizar = async (id, dados, usuario) => {
  const atividade = await repository.buscarPorId(id);
  if (!atividade) throw new Error("Atividade não encontrada");

  if (usuario.tipo === "administrador") return salvar();

  if (usuario.tipo === "residente") {
    verificarSeResidenteEstaAcessandoProprioRegistro(
      usuario,
      atividade.residente_id
    );
    return salvar();
  }

  if (usuario.tipo === "supervisor") {
    await verificarSeSupervisorTemAcesso(usuario, atividade.residente_id);
    return salvar();
  }

  throw new Error("Acesso negado");

  async function salvar() {
    const atualizada = await repository.atualizarAtividade(id, dados);

    await logRepository.registrarLog({
      atividade_id: id,
      acao: "editar",
      dados_anteriores: atividade,
      dados_novos: atualizada,
      usuario_id: usuario.id
    });

    return atualizada;
  }
};

exports.excluir = async (id, usuario) => {
  const atividade = await repository.buscarPorId(id);
  if (!atividade) throw new Error("Atividade não encontrada.");

  if (usuario.tipo === "administrador") {
    return await repository.excluirAtividade(id);
  }

  if (usuario.tipo === "supervisor") {
    await verificarSeSupervisorTemAcesso(usuario, atividade.residente_id);
    return await repository.excluirAtividade(id);
  }

  throw new Error(
    "Apenas supervisores ou administradores podem excluir atividades."
  );
};

exports.buscarPorId = async (id, residenteId, usuario) => {
  await verificarPermissaoParaResidente(usuario, residenteId);
  return await repository.buscarPorId(id);
};

exports.buscarPorResidente = async (residenteId, usuario) => {
  await verificarPermissaoParaResidente(usuario, residenteId);
  return await repository.listarPorResidente(residenteId);
};

exports.buscarPendentes = async (residenteId) => {
  return await repository.atividadesPendentes(residenteId);
};

exports.buscarFinalizadas = async (residenteId) => {
  return await repository.atividadesFinalizadas(residenteId);
};

exports.obterEstatisticas = async (residenteId) => {
  return await repository.obterEstatisticas(residenteId);
};
