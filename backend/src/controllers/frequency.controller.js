const frequenciaService = require('../services/frequency.service');

exports.registrarPonto = async (req, res) => {
    try {
        const usuarioId = req.usuario.id;
        const residenteId = req.usuario.id;

        const registro = await frequenciaService.registrarPonto(usuarioId, residenteId);
        registro.horario_chegada = formatarHorario(registro.horario_chegada);
        registro.inicio_intervalo = formatarHorario(registro.inicio_intervalo);
        registro.fim_intervalo = formatarHorario(registro.fim_intervalo);
        registro.horario_saida = formatarHorario(registro.horario_saida);


        res.status(200).json({ mensagem: "Ponto registrado com sucesso.", registro });
    } catch (error) {
        console.error(error);
        res.status(400).json({ erro: error.message || "Erro ao registrar ponto." });
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
