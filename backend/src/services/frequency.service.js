const { format } = require('path');
const frequenciaRepository = require('../repositories/frequency.repositories');

const remover3Horas = (date) => {
    return new Date(date.getTime() - 3 * 60 * 60 * 1000);
};

const formatarHorario = (data) => {
    return data.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  };

exports.registrarPonto = async (usuarioId, residenteId) => {
    const hoje = new Date();
    const dataHoje = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate());
    const dataUTC = new Date(Date.UTC(dataHoje.getFullYear(), dataHoje.getMonth(), dataHoje.getDate()));
  
    let frequencia = await frequenciaRepository.buscarPorData(residenteId, dataUTC);
    const agora = remover3Horas(new Date());
    const horarioFormatado = formatarHorario(agora);
  
    if (!frequencia) {
      const registro = await frequenciaRepository.criarFrequencia({
        residente_id: residenteId,
        data: dataUTC,
        presente: true,
        horario_chegada: agora,
        registrado_por: usuarioId
      });
  
      return {
        mensagem: `Chegada registrada com sucesso. ${horarioFormatado}`,
        registro
      };
    }
  
    if (!frequencia.inicio_intervalo) {
      const registro = await frequenciaRepository.atualizarFrequencia(frequencia.id, {
        inicio_intervalo: agora
      });
  
      return {
        mensagem: `Início do intervalo registrado com sucesso. ${horarioFormatado}`,
        registro
      };
    }
  
    if (!frequencia.fim_intervalo) {
      const registro = await frequenciaRepository.atualizarFrequencia(frequencia.id, {
        fim_intervalo: agora
      });
  
      return {
        mensagem: `Fim do intervalo registrado com sucesso. ${horarioFormatado}`,
        registro
      };
    }
  
    if (!frequencia.horario_saida) {
      const registro = await frequenciaRepository.atualizarFrequencia(frequencia.id, {
        horario_saida: agora
      });
  
      return {
        mensagem: `Saída registrada com sucesso. ${horarioFormatado}`,
        registro
      };
    }
    
    throw { status: 400, message: 'Todos os horários já foram registrados hoje.' }
  };
  

// Quantidade de presenças e faltas
exports.obterPresencasFaltasPorMes = async (mes, ano) => {
    return await frequenciaRepository.presencasFaltasPorMes(mes, ano);
};

// Média de horários de chegada
exports.obterMediaHorariosChegadaPorMes = async (mes, ano) => {
    return await frequenciaRepository.mediaHorariosChegadaPorMes(mes, ano);
};

// Ranking de assiduidade
exports.obterRankingAssiduidadePorMes = async (mes, ano) => {
    return await frequenciaRepository.rankingAssiduidadePorMes(mes, ano);
};
