# Sistema de Gestão de Frequência e Avaliação para Residentes Médicos

Este projeto visa resolver os problemas enfrentados pela gestão de frequência e avaliação de residentes no Hospital das Clínicas, proporcionando uma plataforma integrada para registrar e acompanhar a presença dos residentes e suas atividades clínicas e acadêmicas, além de realizar avaliações contínuas e detalhadas. O sistema busca otimizar a formação dos residentes, melhorar o processo de feedback e proporcionar um controle preciso sobre suas atividades diárias.

## Funcionalidades

### 1. **Cadastro de Usuários**
   - Tipos de usuários (roles): residente, supervisor e administrador.
   - Campos específicos para cada tipo de usuário:
     - **Residente**: Nome completo, email, CPF, senha, especialidade, número de matrícula.
     - **Supervisor**: Nome completo, email, CPF, senha, especialidade, e o número de residentes supervisionados.
     - **Administrador**: Nome completo, email, CPF, senha, e permissões administrativas.

### 2. **Controle de Frequência**
   - Registro de entrada e saída em diferentes atividades: plantões, aulas, consultas e cirurgias.
   - Monitoramento contínuo da presença com relatórios gerados automaticamente.
   
### 3. **Registro de Atividades**
   - O residente pode registrar as atividades realizadas, como atendimentos, cirurgias, e aulas, com vinculação a supervisores.
   - Integração com o prontuário eletrônico para registrar automaticamente as atividades clínicas.

### 4. **Avaliação de Desempenho**
   - Supervisores podem avaliar os residentes após cada atividade, fornecendo feedback em tempo real.
   - A avaliação será feita por critérios específicos, como habilidades clínicas, tomada de decisão, e comunicação.
   - Relatórios personalizados para cada residente com suas áreas de melhoria e evolução.

### 5. **Relatórios e Dashboard**
   - Geração de relatórios consolidados para gestores e relatórios individuais para residentes.
   - Dashboard em tempo real com visualização da frequência, atividades realizadas e avaliações.
   - Exportação de relatórios em formato CSV ou PDF.

### 6. **Notificações e Alertas**
   - Envio de lembretes automáticos sobre avaliações pendentes, baixa frequência ou desempenho abaixo do esperado.
   - Notificações via email ou push para dispositivos móveis.

---

## Tecnologias Utilizadas

- **Frontend (Móvel)**: React Native
- **Backend**: Node.js, Express
- **Banco de Dados**: MySQL
- **Autenticação**: JWT (JSON Web Tokens)
- **Segurança**: bcrypt.js para criptografia de senhas, TLS/SSL
- **Notificações**: Firebase Cloud Messaging (FCM), Nodemailer para notificações por email
- **Infraestrutura**: Docker, PM2, Render (para protótipos), AWS (para produção)

---

## Como Rodar o Projeto

### Pré-Requisitos

- **Node.js** (versão 16 ou superior)
- **MySQL**
- **Conta de e-mail para envio de confirmações** (com acesso a uma [senha de aplicativo](https://support.google.com/accounts/answer/185833?hl=pt-BR))

### 1. **Backend**

#### 1.1 Instalar Dependências

Navegue até o diretório `/backend` e instale as dependências:

```bash
cd backend
npm install
```

### 1.2 Configurar o Arquivo `.env`

Crie o arquivo `.env` na pasta raiz do backend com as seguintes variáveis de ambiente:

```bash
JWT_SECRET=sua-chave-secreta
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha-do-app
```

- **JWT_SECRET**: Uma chave secreta para a geração de tokens JWT.
- **EMAIL_USER**: O e-mail de envio para notificações de confirmação.
- **EMAIL_PASS**: A senha do aplicativo gerada para o e-mail de envio.

### 1.3 Rodar o Servidor

Execute o servidor com o seguinte comando:

```bash
node app.js
```

O backend estará disponível em [http://localhost:3000](http://localhost:3000).

---

## 2. Frontend Web

### 2.1 Instalar Dependências

Dentro do diretório `/frontend`, instale as dependências com o comando:

```bash
cd frontend
npm install
```

### 2.2 Rodar o Frontend Web

Execute o frontend com:

```bash
npm start
```

A aplicação estará disponível em [http://localhost:5000](http://localhost:5000).

---

## 3. Frontend Mobile

### 3.1 Instalar Dependências

Dentro do diretório `/frontend/mobile`, instale as dependências com o comando:

```bash
cd frontend/mobile
npm install
```

### 3.2 Rodar o Frontend Mobile

Execute o frontend para testar no emulador ou dispositivo físico:

```bash
expo start
```

Isso abrirá o painel para você testar no navegador ou no seu dispositivo móvel.

---

# Endpoints da API

## 1. Cadastro de Usuário

- **Rota:** `POST /cadastro`
- **Requisição:** Dados do usuário (nome, email, CPF, senha e outros específicos de cada tipo de usuário).
- **Resposta:** Retorna uma mensagem de sucesso ou erro.

**Exemplo de payload para cadastro de residente:**

```json
{
  "email": "pedro.silva@hc.pe.com.br",
  "senha": "senhaSuperSecreta",
  "nome_completo": "Pedro Silva",
  "telefone": "5581999998888",
  "data_nascimento": "1997-05-15",
  "role": "residente",
  "numero_registro": "123456",
  "especialidade": "Cirurgia Geral",
  "supervisor_responsavel": "Dr. João Silva",
  "instituicao_formacao": "Hospital das Clínicas",
   "id_setor": 3
}
```

---

## 2. Login de Usuário

- **Rota:** `POST /login`
- **Requisição:** Dados de login (email e senha).
- **Resposta:** Retorna um token JWT ou uma mensagem de erro se as credenciais forem inválidas.

**Exemplo de payload para login:**

```json
{
  "email": "joao.silva@hc.pe.com.br",
  "senha": "senha123"
}
```

---

# Requisitos Funcionais

## Registro de Frequência
- Registro de entrada/saída.
- Validação com biometria ou RFID.

## Registro de Atividades
- Cadastro de tarefas realizadas.
- Integração com prontuário eletrônico.

## Avaliação de Desempenho
- Feedback contínuo dos supervisores.
- Relatórios personalizados de desempenho.

## Notificações e Alertas
- Envio de notificações sobre atividades pendentes ou avaliações a serem feitas.

---

# Contribuições

Para contribuir para o projeto, siga os passos abaixo:

2. Crie uma **branch** para sua feature:
(por exemplo: registro-atividades)
   ```bash
   git checkout -b registro-atividades 
   ```

3. Faça commit das suas alterações:

   ```bash
   git commit -am 'Adicionando minha feature'
   ```

4. Envie sua branch para o repositório remoto:

   ```bash
   git push origin registro-atividades
   ```

5. Abra um **Pull Request** para revisão.

---

## Funcionalidades Implementadas – Branch Cadastro/Login

Esta branch concentra todas as funcionalidades essenciais relacionadas ao sistema de autenticação e gerenciamento de usuários na plataforma. Abaixo, a lista de recursos implementados:

### Cadastro de Usuário

* Suporte para múltiplos tipos de usuário:

   * **Residente**: cadastro com CRM, especialidade, ano de residência, instituição de formação e setor.

   * **Supervisor**: cadastro com CRM, especialidade e áreas supervisionadas.

   * **Administrador**

* Validação completa dos campos com mensagens específicas.

* Hash de senha com `bcrypt`.

* Armazenamento em banco com `Prisma ORM`.

### Confirmação de E-mail

* Após o cadastro, um e-mail de confirmação é enviado com link/token JWT.

* A conta só é ativada após a confirmação do e-mail.

* Token JWT expira em 24h.

* Endpoint protegido que marca o campo `ativo` como `true` ao ser validado.

### Login

* Validação de credenciais com `bcrypt`.

* Verificação de conta ativa e e-mail confirmado.

* Geração de token JWT com expiração.

* Retorno de dados mínimos do usuário autenticado.

### Logout

* Implementado no frontend via remoção do token JWT do armazenamento local.

* O backend pode forçar redirecionamento caso o token não exista ou expire.

### Recuperação de Senha

* Endpoint `/auth/recuperar-senha` recebe o e-mail do usuário.

* Um e-mail é enviado com link para redefinir a senha contendo um token JWT de curta duração (1h).

* O link leva para a rota `/auth/redefinir-senha/:token` no frontend.

### Redefinição de Senha

* Rota protegida que valida o token de recuperação.

* Nova senha é criptografada e salva no banco de dados.

* O token é invalidado após uso (via expiração).

### Proteção contra Brute Force (Rate Limiting)

* Rota `/auth/login` protegida com `express-rate-limit`.

* Limite configurado para 5 requisições a cada 15 minutos por IP.

* Retorno de erro claro após exceder o limite.

### Tecnologias Utilizadas

* **Node.js**, **Express.js**

* **Prisma ORM** (com MySQL)

* **JWT** para autenticação

* **bcrypt** para hashing de senha

* **nodemailer** para envio de e-mails

* **express-rate-limit** para proteção contra brute force



# Licença

Este projeto não possui licensa.

---

