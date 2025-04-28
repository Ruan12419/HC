const express = require("express")
const file = require("fs")

const app = express()
app.use((req, res, next) => {
    res.setHeader("Content-Type", "text/html; charset=UTF-8");
    next();
  });

  app.use(express.json())


const email_G = "email@email.com"
const senha_G = "senha123"

app.get("/", (req, res) => {
    res.status(200).json({ dados: "Tela inicial" });
});

app.post("/login", (req, res) => {
    let { email, senha } = req.body;

    if (email === email_G) {
        if (senha === senha_G) {
            res.status(200).json({data: `Login efetuado com sucesso!`})

        }
    }

    
    res.status(400).json({data: `Não foi possível fazer login!`})
    
})

app.listen(3000, () => {
    console.log("Está rodando!");
});