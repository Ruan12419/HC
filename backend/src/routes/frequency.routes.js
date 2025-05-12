const express = require('express');
const frequenciaRoute = express.Router();

const frequencyController = require('../controllers/frequency.controller');
const { authMiddleware } = require('../middlewares/auth.middleware'); 
const verificarPermissao = require("../middlewares/rbac.middleware")

// Rota para registrar ponto
frequenciaRoute.post('/registrar', authMiddleware, verificarPermissao('residente'), frequencyController.registrarPonto);

// Exemplo de rota para editar frequência (somente para supervisores ou admins)
// router.put('/editar/:id', verificarPermissao('supervisor'), frequenciaService.editarFrequencia); // TODO


// Rota para obter presenças e faltas por mês
frequenciaRoute.get('/presencas-faltas', frequencyController.obterPresencasFaltasPorMes);

// Rota para obter média de horários de chegada por mês
frequenciaRoute.get('/media-chegada', frequencyController.obterMediaHorariosChegadaPorMes);

// Rota para obter ranking de assiduidade por mês
frequenciaRoute.get('/ranking-assiduidade', frequencyController.obterRankingAssiduidadePorMes);


module.exports = frequenciaRoute;
