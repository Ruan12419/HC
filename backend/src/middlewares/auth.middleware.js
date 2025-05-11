const jwt = require("jsonwebtoken");
const rateLimit = require('express-rate-limit');

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ erro: "Token não fornecido. Acesso negado." });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || "secretkey");
        req.usuario = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ erro: "Token inválido ou expirado. Redirecionando para login." });
    }
};


// Limitador de requisições
const limitador = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 5, // Máximo de 5 tentativas por IP
    message: {
        erro: "Muitas tentativas de login. Tente novamente em 15 minutos."
    },
    standardHeaders: true,
    legacyHeaders: false,
});


module.exports = {authMiddleware, limitador};
