const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')

const app = express()
app.use(express.json()) //os dados da requisição serão no formato json
const porta = 3333

//aqui está criando a lista inicial de mulheres
const mulheres = [
    {
        id:'1',
        nome: 'Mulher 1',
        imagem: 'http1',
        minibio: 'Teste 1'
    },
    {
        id:'2',
        nome: 'Mulher 2',
        imagem: 'http2',
        minibio: 'Teste 2'
    },
    {
        id:'3',
        nome: 'Mulher 3',
        imagem: 'http3',
        minibio: 'Teste 3'
    },
]

//PORTA
function mostraPorta(){
    console.log('Servidor criado e rodando na porta ', porta);
}

//GET
function mostraMulheres(request,response) {
    response.json(mulheres)
}

//POST
function criaMulher(request,response) {
    const novaMulher = {
        id: uuidv4(),
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio
    }

    mulheres.push(novaMulher)
    response.json(mulheres)
}

//PATCH
function corrigeMulher(request,response) {
    function encontraMulher(mulher) {
        if(mulher.id === request.params.id) {
            return mulher
        }
    }

    const mulherEncontrada = mulheres.find(encontraMulher) //find, retorna só um

    if (request.body.nome) {
        mulherEncontrada.nome = request.body.nome
    }
    if (request.body.imagem) {
        mulherEncontrada.imagem = request.body.imagem
    }
    if (request.body.minibio) {
        mulherEncontrada.minibio = request.body.minibio
    }

    response.json(mulheres)
}

//PATCH
function deletaMulher(request,response) {
    function todasMenosEla(mulher) {
        if(mulher.id !== request.params.id) {
            return mulher
        }
    }

    const mulhereQueFicam = mulheres.filter(todasMenosEla) //retorna todas as mulheres menos a que foi selecionada

    response.json(mulhereQueFicam)
}

app.use(router.delete('/mulheres/:id', deletaMulher))
app.use(router.patch('/mulheres/:id', corrigeMulher))
app.use(router.post('/mulheres',criaMulher))
app.use(router.get('/mulheres',mostraMulheres))
app.listen(porta,mostraPorta)