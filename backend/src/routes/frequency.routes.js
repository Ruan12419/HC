const express = require('express');
const frequenciaRoute = express.Router();

const frequencyController = require('../controllers/frequency.controller');
const { authMiddleware } = require('../middlewares/auth.middleware'); 

// Rota para registrar ponto
frequenciaRoute.post('/registrar', authMiddleware, frequencyController.registrarPonto);

module.exports = frequenciaRoute;
