const { prisma } = require('../generated/prisma');

const UsuarioRepository = {
  async criarUsuario(dados) {
    return await prisma.usuario.create({ data: dados });
  },

  async buscarPorEmail(email) {
    return await prisma.usuario.findUnique({ where: { email } });
  },
};

module.exports = UsuarioRepository;
