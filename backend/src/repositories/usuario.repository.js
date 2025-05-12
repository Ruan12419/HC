const prisma = require('../config/db.config');

class UsuarioRepository {
    static async findByEmail(email) {
        return await prisma.usuario.findUnique({
            where: { email }
        });
    }

    static async createUsuario(data) {
        return await prisma.usuario.create({
            data,
            include: {
                residente: true,
                supervisor: true,
                administrador: true
            }
        });
    }

    static async updateUsuarioEmailStatus(email, ativo) {
        return await prisma.usuario.update({
            where: { email },
            data: { ativo }
        });
    }

    static async updateUsuarioPassword(email, senha_hash) {
        return await prisma.usuario.update({
            where: { email },
            data: { senha_hash }
        });
    }
}

module.exports = UsuarioRepository;
