const frequenciaService = require('../services/frequency.service');

// Registrar ponto
exports.registrarPonto = async (req, res, next) => {
    try {
        const usuarioId = req.usuario.id;
        const residenteId = req.usuario.id;

        if (!residenteId || typeof residenteId !== 'number') {
            throw { status: 400, message: 'residente_id inválido.' };
        }

        const registro = await frequenciaService.registrarPonto(usuarioId, residenteId);
        registro.horario_chegada = formatarHorario(registro.registro.horario_chegada);
        registro.inicio_intervalo = formatarHorario(registro.registro.inicio_intervalo);
        registro.fim_intervalo = formatarHorario(registro.registro.fim_intervalo);
        registro.horario_saida = formatarHorario(registro.registro.horario_saida);

        res.status(200).json({ mensagem: "Ponto registrado com sucesso.", registro });
    } catch (error) {
        next(error); // Envia para o middleware de erro
    }
};

// Obter quantidade de presenças e faltas por mês
exports.obterPresencasFaltasPorMes = async (req, res, next) => {
    try {
        const { mes, ano } = req.body;
        const dados = await frequenciaService.obterPresencasFaltasPorMes(parseInt(mes), parseInt(ano));
        res.status(200).json({ mensagem: "Dados de presenças e faltas", dados });
    } catch (error) {
        next(error); // Envia para o middleware de erro
    }
};

// Obter média de horários de chegada por mês
exports.obterMediaHorariosChegadaPorMes = async (req, res, next) => {
    try {
        const { mes, ano } = req.body;
        const media = await frequenciaService.obterMediaHorariosChegadaPorMes(parseInt(mes), parseInt(ano));
        res.status(200).json({ mensagem: "Média de horários de chegada", media });
    } catch (error) {
        next(error); // Envia para o middleware de erro
    }
};

// Obter ranking de assiduidade por mês
exports.obterRankingAssiduidadePorMes = async (req, res, next) => {
    try {
        const { mes, ano } = req.body;
        const ranking = await frequenciaService.obterRankingAssiduidadePorMes(parseInt(mes), parseInt(ano));
        res.status(200).json({ mensagem: "Ranking de assiduidade", ranking });
    } catch (error) {
        next(error); // Envia para o middleware de erro
    }
};

const formatarHorario = (date) => {
    if (!date) return null;
    return new Intl.DateTimeFormat('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'UTC'
    }).format(date);
};
