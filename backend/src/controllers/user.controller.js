const prisma = require('../config/db.config');

exports.obterPerfil = async (req, res) => {
    try {
        const email = req.usuario.email;

        const usuario = await prisma.usuario.findUnique({
            where: { email },
            select: {
                id: false,
                nome: true,
                email: true,
                tipo: true,
                residente: {
                    select: {
                        id: false,
                        especialidade: true,
                        ano_residencia: true,
                        setor: {
                            select: {
                                nome: true
                            }
                        }
                    }
                },
                supervisor: {
                    select: {
                        id: true,
                        crm: true,
                        setor: {
                            select: {
                                nome: true
                            }
                        }
                    }
                },
                administrador: {
                    select: {
                        id: true,
                    }
                }
            }
        });

        if (!usuario) {
            return res.status(404).json({ erro: "Usuário não encontrado." });
        }

        return res.status(200).json({ usuario });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ erro: "Erro ao buscar o perfil do usuário." });
    }
};
