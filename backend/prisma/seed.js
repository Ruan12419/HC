const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

async function main() {
  // Criar setores
  const setor = await prisma.setor.create({
    data: { nome: "Clínica Médica", descricao: "Setor da clínica geral" },
  });

  const senhaHash = await bcrypt.hash('123456', 10);

  // Criar administrador
  const admin = await prisma.usuario.create({
    data: {
      nome: "Admin Geral",
      email: "admin@hc.pe.br",
      senha_hash: senhaHash,
      tipo: "administrador",
      administrador: { create: {} },
    },
  });

  // Criar residente
  await prisma.usuario.create({
    data: {
      nome: "João Residente",
      email: "joao@hc.pe.br",
      senha_hash: senhaHash,
      tipo: "residente",
      residente: {
        create: {
          crm: "123456",
          especialidade: "Clínica Médica",
          ano_residencia: 2,
          setor_id: setor.id
        },
      },
    },
  });

  console.log('Dados inseridos com sucesso!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
