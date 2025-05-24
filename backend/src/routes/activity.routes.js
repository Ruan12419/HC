const express = require('express');
const activityRoute = express.Router();
const {criar, atualizar, excluir, buscarPorId, listarPorResidente, 
    pendentes, listarFinalizadas, estatisticas} = require('../controllers/activity.controller');

// Criar nova atividade
activityRoute.post('/criar', criar);

// Atualizar atividade existente
activityRoute.patch('/:id', atualizar);

// Excluir atividade
activityRoute.delete('/:id', excluir);

// Buscar Atividade por Id
activityRoute.get('/:id', buscarPorId);

// Listar atividades de um residente
activityRoute.get('/residente/:residenteId', listarPorResidente);

// Verificar atividades pendentes
activityRoute.get('/pendentes/:residenteId', pendentes);

// Verificar atividades finalizadas
activityRoute.get('/finalizadas/:residenteId', listarFinalizadas);

// Retorna estatísticas para Dashboard
activityRoute.get('/residente/:residenteId/stats', estatisticas);

module.exports = activityRoute;
