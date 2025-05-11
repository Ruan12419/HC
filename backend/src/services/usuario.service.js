const UsuarioRepository = require('../repositories/usuario.repository');
const bcrypt = require('bcrypt');

const UsuarioService = {
  async cadastrarUsuario(dados) {
    const existente = await UsuarioRepository.buscarPorEmail(dados.email);
    if (existente) throw new Error("E-mail já cadastrado.");

    const senhaHash = await bcrypt.hash(dados.senha, 10);
    const usuario = await UsuarioRepository.criarUsuario({
      nome: dados.nome,
      email: dados.email,
      senha_hash: senhaHash,
      tipo: dados.tipo,
    });

    return usuario;
  },
};

module.exports = UsuarioService;
