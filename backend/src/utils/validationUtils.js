function validarCamposComuns(body) {
    const { email, senha, nome_completo, telefone, data_nascimento, role } = body;

    if (!email || !/\S+@\S+\.\S+/.test(email)) return "Email inválido ou ausente.";
    if (!senha || senha.length < 6) return "A senha deve ter pelo menos 6 caracteres.";
    if (!nome_completo || nome_completo.trim().length < 3) return "Nome completo é obrigatório.";
    if (!telefone || !/^\d{10,}$/.test(telefone)) return "Telefone inválido.";
    if (!data_nascimento || isNaN(Date.parse(data_nascimento))) return "Data de nascimento inválida.";
    const roles = ["residente", "supervisor", "administrador"];
    if (!role || !roles.includes(role.toLowerCase())) return "Função (role) inválida.";
    return null;
}

function validarResidente(body) {
    const { numero_registro, especialidade, supervisor_responsavel, instituicao_formacao } = body;
    if (!numero_registro || numero_registro.trim() === "") return "Número de registro (CRM) é obrigatório.";
    if (!especialidade || especialidade.trim() === "") return "Especialidade é obrigatória.";
    if (!supervisor_responsavel || supervisor_responsavel.trim() === "") return "Supervisor responsável é obrigatório.";
    if (!instituicao_formacao || instituicao_formacao.trim() === "") return "Instituição de formação é obrigatória.";
    return null;
}

function validarSupervisor(body) {
    const { numero_registro, especialidade, areas_supervisionadas } = body;
    if (!numero_registro || numero_registro.trim() === "") return "Número de registro (CRM) é obrigatório.";
    if (!especialidade || especialidade.trim() === "") return "Especialidade é obrigatória.";
    if (!Array.isArray(areas_supervisionadas) || areas_supervisionadas.length === 0) return "Áreas supervisionadas inválidas.";
    return null;
}

function validarAdministrador(body) {
    const { cargo, departamento, permissoes } = body;
    if (!cargo || cargo.trim() === "") return "Cargo é obrigatório.";
    if (!departamento || departamento.trim() === "") return "Departamento é obrigatório.";
    if (!Array.isArray(permissoes) || permissoes.length === 0) return "Permissões inválidas.";
    return null;
}

module.exports = {
    validarCamposComuns,
    validarResidente,
    validarSupervisor,
    validarAdministrador
};
