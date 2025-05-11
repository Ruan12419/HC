const express = require("express")
const userRoute = express.Router()
const { authMiddleware } = require("../middlewares/auth.middleware")
const usuarioController = require("../controllers/user.controller")


userRoute.get("/perfil", authMiddleware, usuarioController.obterPerfil);

module.exports = userRoute;