const express = require("express")
const file = require("fs")

const app = express()
app.use((req, res, next) => {
    res.setHeader("Content-Type", "text/html; charset=UTF-8");
    next();
  });

  app.use(express.json())


app.get("/", (req, res) => {
    res.status(200).json({ dados: "Tela inicial" });
});

app.post("/entrada", (req, res) => {
    let { nome, cpf } = req.body;
    
    res.status(201).json({data: `Horário adicionado com sucesso!`})
    
})

app.listen(3000, () => {
    console.log("Está rodando!");
});