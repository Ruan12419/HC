const express = require("express")
const authRoute = express.Router()
const {authMiddleware, limitador} = require("../middlewares/auth.middleware")
const { cadastrarUsuario, login, confirmarEmail, recuperarSenha, redefinirSenha } = require("../controllers/auth.controller");


/*
CAMPOS NECESSÁRIOS PARA TODOS OS USUÁRIOS:

    EMAIL: string (usuario@dominio.com)
    SENHA: string (armazenar com bcrypt)
    NOME COMPLETO: string (Fernando Antônio)
    CELULAR: string (5581999998888)
    DATA_NASC: date (15/04/2000)
    ROLE: string (residente, supervisor, administrador) [não aparece para residentes]

*/
/*
CAMPOS NECESSÁRIOS PARA RESIDENTES:
    CRM: string (123456)
    ESPECIALIDADE: string (Cirurgia Geral)
    SUPERVISOR_RESPONSAVEL: string (ID ou nome do supervisor)
    INSTITUICAO_DE_FORMACAO: string (Hospital das Clinicas)
 */
/*
CAMPOS NECESSÁRIOS PARA SUPERVISORES:
    CRM: string (987654)
    ESPECIALIDADE: string (Cardiologia)
    AREAS_DE_SUPERVISAO: Array<string> (["Plantões", "Cirurgias", "Consultórios"])
*/
/*
CAMPOS NECESSÁRIOS PARA ADMINISTRADORES:
    CARGO: string (Coordenador de Residência)
    DEPARTAMENTO_UNIDADE: string (Departamento de Cirurgia)
    PERMISSOES: Array<string> (["gerenciar_residentes", "visualizar_avaliacoes", "editar_atividades", "garantir_permissoes"])
*/

/*
EXEMPLOS DE ESTRUTURA JSON PARA CADA ROLE

{
  "email": "joao.silva@dominio.com",
  "senha": "senhaSuperSecreta",
  "nome_completo": "João Silva",
  "telefone": "+55 81 99999-8888",
  "data_nascimento": "1990-05-15",
  "role": "residente",
  "numero_registro": "123456",
  "especialidade": "Cirurgia Geral",
  "supervisor_responsavel": "Dr. Pedro Silva",
  "instituicao_formacao": "Hospital das Clínicas"
}


{
  "email": "pedro.silva@dominio.com",
  "senha": "senhaSuperSecreta",
  "nome_completo": "Pedro Silva",
  "telefone": "+55 81 99999-8888",
  "data_nascimento": "1980-07-10",
  "role": "supervisor",
  "numero_registro": "987654",
  "especialidade": "Cardiologia",
  "areas_supervisionadas": ["Plantões", "Cirurgias", "Consultórios"]
}


{
  "email": "admin@dominio.com",
  "senha": "senhaSuperSecreta",
  "nome_completo": "Administrador",
  "telefone": "+55 87 99999-8888",
  "data_nascimento": "1975-03-22",
  "role": "administrador",
  "cargo": "Coordenador de Residência",
  "departamento": "Departamento de Cirurgia",
  "permissoes": ["gerenciar_residentes", "visualizar_avaliacoes", "editar_atividades"]
}

*/
/*
OPERAÇÕES DE LOGIN DEVEM SER FEITAS VIA JWT
*/


authRoute.post("/cadastro", limitador, cadastrarUsuario);
authRoute.post("/login", limitador, login);
authRoute.get("/confirmar-email/:token", confirmarEmail);

authRoute.post('/recuperar-senha', recuperarSenha);
authRoute.post('/redefinir-senha', redefinirSenha);


module.exports = authRoute;