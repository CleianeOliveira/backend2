const express = require("express")
const router = express.Router() //para poder criar as rotas

const app = express()
const porta = 3333

function mostraOla(request, response){ //função que será chamada pela rota, tem que ter request e response
    response.send("Olá, mundo!") //o que será enviado para o localhost
}

function mostraPorta(){
    console.log("Servidor criado e rodando na porta ", porta);
}

app.use(router.get("/ola",mostraOla)) //define que no ola a função mostraOla será chamada, o get pega o endereço da url
app.listen(porta,mostraPorta)

//roda o arquivo node ola.js
//acessa a página localhost:3333/ola