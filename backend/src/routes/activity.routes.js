const express = require('express');
const activityRoute = express.Router();
const {criar, atualizar, excluir, listarPorResidente, pendentes} = require('../controllers/activity.controller');

// Criar nova atividade
activityRoute.post('/criar', criar);

// Atualizar atividade existente
activityRoute.put('/:id', atualizar);

// Excluir atividade
activityRoute.delete('/:id', excluir);

// Listar atividades de um residente
activityRoute.get('/residente/:residenteId', listarPorResidente);

// Verificar atividades pendentes por semana e dia
activityRoute.get('/pendentes/:residenteId', pendentes);

module.exports = activityRoute;
