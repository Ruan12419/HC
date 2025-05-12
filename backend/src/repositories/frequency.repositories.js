const prisma = require('../config/db.config');

exports.buscarPorData = async (residenteId, data) => {
    console.log(residenteId)
    console.log(data)
    return await prisma.frequencia.findUnique({
        where: { residente_id_data: { residente_id: residenteId, data } }
    });
};

exports.criarFrequencia = async (dados) => {
    return await prisma.frequencia.create({ data: dados });
};

exports.atualizarFrequencia = async (id, dados) => {
    return await prisma.frequencia.update({
        where: { id },
        data: dados
    });
};
