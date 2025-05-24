const express = require("express");
const net = require("net");

const app = express();
const errorMiddleware = require('./src/middlewares/error.middleware');
const port = 3000;

// Middleware para configurar o Content-Type
app.use((req, res, next) => {
  res.setHeader("Content-Type", "text/html; charset=UTF-8");
  next();
});

app.use(express.json());

// Função para verificar se a porta está em uso
const checkPortInUse = (port) => {
  return new Promise((resolve, reject) => {
    const server = net.createServer().listen(port, () => {
      server.close();
      resolve(false); // A porta está livre
    });
    
    server.on("error", (err) => {
      if (err.code === "EADDRINUSE") {
        resolve(true); // A porta está em uso
      } else {
        reject(err); // Outro erro
      }
    });
  });
};


// Definição de rotas
const cadastroRoute = require("./src/routes/auth.routes");
app.use("/auth", cadastroRoute);
const usuarioRoute = require("./src/routes/user.routes");
app.use("/user", usuarioRoute);
const frequenciaRoute = require('./src/routes/frequency.routes');
app.use('/frequencias', frequenciaRoute);
const atividadeRoute = require('./src/routes/activity.routes');
app.use('/atividade', atividadeRoute);

app.use(errorMiddleware);

checkPortInUse(port)
.then((isInUse) => {
  if (isInUse) {
    console.error(`Já há outra instância rodando na URI:PORTA http://localhost:${port}`);
    process.exit(1); // Finaliza o processo se a porta estiver em uso
  } else {
    // Se a porta não estiver em uso, inicia o servidor
    app.listen(port, () => {
      console.log(`Está rodando na porta ${port}!`);
    });
  }
})
.catch((err) => {
  console.error("Erro ao verificar a porta:", err);
  process.exit(1); // Finaliza o processo em caso de erro inesperado
});
