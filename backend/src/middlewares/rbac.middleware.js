const verificarPermissao = (requiredRole) => {
    return (req, res, next) => {
        const usuario = req.usuario;

        // Verificar se o usuário tem a permissão necessária
        if (usuario.tipo !== requiredRole && usuario.tipo !== 'admin') {
            return res.status(403).json({ message: 'Permissão negada.' });
        }

        next();
    };
};

module.exports = verificarPermissao;
