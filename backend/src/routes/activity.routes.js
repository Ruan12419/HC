const express = require('express');
const activityRoute = express.Router();
const {criar, atualizar, excluir, buscarPorId, listarPorResidente, 
    pendentes, listarFinalizadas, estatisticas, listarAtividadesComFiltros} = require('../controllers/activity.controller');
const { authMiddleware, permitirRoles } = require("../middlewares/auth.middleware")

// Criar nova atividade
activityRoute.post('/criar', authMiddleware, permitirRoles("residente", "supervisor", "administrador"), criar);

// Atualizar atividade existente
activityRoute.patch('/:id', authMiddleware, permitirRoles("residente", "supervisor", "administrador"), atualizar);

// Excluir atividade
activityRoute.delete('/:id', authMiddleware, permitirRoles("supervisor", "administrador"), excluir);

// Buscar Atividade por Id
activityRoute.get('/:id', authMiddleware, permitirRoles("residente", "supervisor", "administrador"), buscarPorId);

// Listar atividades de um residente
activityRoute.get('/residente/:residenteId', authMiddleware, permitirRoles("residente", "supervisor", "administrador"), listarPorResidente);

// Verificar atividades pendentes
activityRoute.get('/pendentes/:residenteId', authMiddleware, permitirRoles("residente", "supervisor", "administrador"), pendentes);

// Verificar atividades finalizadas
activityRoute.get('/finalizadas/:residenteId', authMiddleware, permitirRoles("residente", "supervisor", "administrador"), listarFinalizadas);

// Retorna estatísticas para Dashboard
activityRoute.get('/residente/:residenteId/stats', authMiddleware, permitirRoles("residente", "supervisor", "administrador"), estatisticas);

// Retorna atividades com paginação
activityRoute.get('/residente/:residenteId/atividades', authMiddleware, permitirRoles("residente", "supervisor", "administrador"), listarAtividadesComFiltros);

module.exports = activityRoute;
