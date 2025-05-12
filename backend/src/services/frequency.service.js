const frequenciaRepository = require('../repositories/frequency.repositories');

const remover3Horas = (date) => {
    return new Date(date.getTime() - 3 * 60 * 60 * 1000);
};

exports.registrarPonto = async (usuarioId, residenteId) => {
    const hoje = new Date();
    const dataHoje = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate());
    const dataUTC = new Date(Date.UTC(dataHoje.getFullYear(), dataHoje.getMonth(), dataHoje.getDate()));

    let frequencia = await frequenciaRepository.buscarPorData(residenteId, dataUTC);

    const agora = remover3Horas(new Date());


    console.log(frequencia);

    if (!frequencia) {
        // Primeiro registro do dia
        return await frequenciaRepository.criarFrequencia({
            residente_id: residenteId,
            data: dataHoje,
            presente: true,
            horario_chegada: agora,
            registrado_por: usuarioId
        });
    }

    // Atualizar os campos de acordo com o que já existe
    if (!frequencia.inicio_intervalo) {
        return await frequenciaRepository.atualizarFrequencia(frequencia.id, {
            inicio_intervalo: agora
        });
    }

    if (!frequencia.fim_intervalo) {
        return await frequenciaRepository.atualizarFrequencia(frequencia.id, {
            fim_intervalo: agora
        });
    }

    if (!frequencia.horario_saida) {
        return await frequenciaRepository.atualizarFrequencia(frequencia.id, {
            horario_saida: agora
        });
    }

    throw new Error("Todos os horários já foram registrados hoje.");
};
