const {
  verificarSeSupervisorTemAcesso,
  verificarSeResidenteEstaAcessandoProprioRegistro,
  verificarPermissaoParaResidente
} = require("../utils/activity.permissions");

jest.mock('../config/db.config', () => ({
  residente: {
    findUnique: jest.fn()
  }
}));

const prisma = require('../config/db.config');

describe('Funções de permissão', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('verificarPermissaoResidente', () => {
    it('permite acesso se residente é o próprio usuário', async () => {
      const usuario = { tipo: 'residente', id: 1 };
      expect(() => verificarSeResidenteEstaAcessandoProprioRegistro(usuario, 1)).not.toThrow();
    });

    it('nega acesso se residente tenta acessar outro residente', async () => {
      const usuario = { tipo: 'residente', residente_id: 1 };
      expect(() => verificarSeResidenteEstaAcessandoProprioRegistro(usuario, 2)).toThrow('Acesso negado.');
    });

    it('permite se usuário não é residente', async () => {
      const usuario = { tipo: 'administrador' };
      await expect(verificarSeSupervisorTemAcesso(usuario, 123)).resolves.toBeUndefined();
    });
  });

  describe('verificarPermissaoSupervisor', () => {
    it('permite acesso se residente está no mesmo setor', async () => {
      const usuario = { tipo: 'supervisor', setor_id: 5 };
      prisma.residente.findUnique.mockResolvedValue({ id: 1, setor_id: 5 });

      await expect(verificarSeSupervisorTemAcesso(usuario, 1)).resolves.toBeUndefined();
    });

    it('nega acesso se residente não está no mesmo setor', async () => {
      const usuario = { tipo: 'supervisor', setor_id: 5 };
      prisma.residente.findUnique.mockResolvedValue({ id: 1, setor_id: 9 });

      await expect(verificarSeSupervisorTemAcesso(usuario, 1)).rejects.toThrow('Acesso negado.');
    });

    it('nega acesso se residente não existe', async () => {
      const usuario = { tipo: 'supervisor', setor_id: 5 };
      prisma.residente.findUnique.mockResolvedValue(null);

      await expect(verificarSeSupervisorTemAcesso(usuario, 1)).rejects.toThrow('Acesso negado.');
    });

    it('permite se usuário não é supervisor', async () => {
      const usuario = { tipo: 'administrador' };
      await expect(verificarPermissaoParaResidente(usuario, 123)).resolves.toBeUndefined();
    });
  });

  describe('verificarPermissaoCriar', () => {
    it('permite para ADMIN ou usuários válidos', async () => {
      const usuario = { tipo: 'administrador' };
      await expect(verificarPermissaoParaResidente(usuario, 1)).resolves.toBeUndefined();
    });

    it('combina residente + supervisor corretamente', async () => {
      const usuario = { tipo: 'supervisor', setor_id: 1 };
      prisma.residente.findUnique.mockResolvedValue({ id: 1, setor_id: 1 });

      await expect(verificarSeSupervisorTemAcesso(usuario, 1)).resolves.toBeUndefined();
    });

    it('nega para residente que tenta criar para outro', async () => {
      const usuario = { tipo: 'residente', residente_id: 1 };
      expect(() => verificarSeResidenteEstaAcessandoProprioRegistro(usuario, 2)).toThrow('Acesso negado.');
    });
  });

  describe('verificarPermissaoEditarOuExcluir', () => {
    it('permite para ADMIN', async () => {
      const usuario = { tipo: 'administrador' };
      await expect(verificarSeSupervisorTemAcesso(usuario, 1)).resolves.toBeUndefined();
    });

    it('permite para supervisor com residente no mesmo setor', async () => {
      const usuario = { tipo: 'supervisor', setor_id: 1 };
      prisma.residente.findUnique.mockResolvedValue({ id: 1, setor_id: 1 });

      await expect(verificarSeSupervisorTemAcesso(usuario, 1)).resolves.toBeUndefined();
    });

    it('nega se não é residente, supervisor nem admin', async () => {
      const usuario = { tipo: 'estagiario' };
      await expect(verificarPermissaoParaResidente(usuario, 1)).rejects.toThrow('Acesso negado.');
    });
  });
});
