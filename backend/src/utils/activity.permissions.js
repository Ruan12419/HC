const prisma = require("../config/db.config");

function roleValido(usuario) {
  if (!["residente", "supervisor", "administrador"].includes(usuario.tipo)) {
    throw new Error("Acesso negado.");
  }
}

async function verificarSeSupervisorTemAcesso(usuario, residenteId) {
  roleValido(usuario);
  if (usuario.tipo !== "supervisor") return;

  const residente = await prisma.residente.findUnique({
    where: { id: residenteId },
  });

  if (!residente || residente.setor_id !== usuario.setor_id) {
    throw new Error("Acesso negado.");
  }
}

function verificarSeResidenteEstaAcessandoProprioRegistro(usuario, residenteId) {
  roleValido(usuario);
  if (usuario.tipo === "residente" && usuario.id !== residenteId) {
    throw new Error("Acesso negado.");
  }
}

async function verificarPermissaoParaResidente(usuario, residenteId) {
  verificarSeResidenteEstaAcessandoProprioRegistro(usuario, residenteId);
  await verificarSeSupervisorTemAcesso(usuario, residenteId);
}

module.exports = {
  verificarSeSupervisorTemAcesso,
  verificarSeResidenteEstaAcessandoProprioRegistro,
  verificarPermissaoParaResidente,
};
