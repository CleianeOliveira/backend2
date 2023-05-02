const express = require('express')
const router = express.Router()
const cors = require('cors') //para permitir a api no frontend
const conectaBancoDeDados = require('./bancoDeDados')
const Mulher = require('./mulherModel')

conectaBancoDeDados() //conectando o banco de dados
const app = express()
app.use(express.json()) //os dados da requisição serão no formato json
app.use(cors()) //libera a api para ser usada no frontend

const porta = 3333

//PORTA
function mostraPorta(){
    console.log('Servidor criado e rodando na porta ', porta);
}

//GET
async function mostraMulheres(request,response) {
    try{
        const mulheresVindasDoBancoDeDados = await Mulher.find()
        response.json(mulheresVindasDoBancoDeDados)
    } catch(erro){
        console.log(erro)
    }
    
}

//POST
async function criaMulher(request,response) {
    
    const novaMulher = new Mulher({ //pega da interface, o modelo é o mulherModel
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
        citacao: request.body.citacao
    })    
    
    try{//envia para o banco
        const mulherCriada = await novaMulher.save()
        response.status(201).json(mulherCriada) //201 - Resposta criada, sucesso
    } catch(erro){
        console.log(erro)
    }

}

//PATCH
async function corrigeMulher(request,response) {
    try{
        const mulherEncontrada = await Mulher.findById(request.params.id) //findByid é um recurso do mongodb, e o id a ser apagado será enviado pelos parametros

        if (request.body.nome) {
            mulherEncontrada.nome = request.body.nome
        }
        if (request.body.imagem) {
            mulherEncontrada.imagem = request.body.imagem
        }
        if (request.body.minibio) {
            mulherEncontrada.minibio = request.body.minibio
        }
        if (request.body.citacao) {
            mulherEncontrada.citacao = request.body.citacao
        }

        //salvar no banco de dados
        const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save()
        response.json(mulherAtualizadaNoBancoDeDados)

    } catch(erro){
        console.log(erro)
    }


    
    

    
}

//DELETE
async function deletaMulher(request,response) {
    
    try{
        await Mulher.findByIdAndDelete(request.params.id) //request é qnd vem da url
        response.json({mensagem:'Mulher deletada com sucesso!'})

    } catch(erro){
        console.log(erro)
    }

    
}

app.use(router.delete('/mulheres/:id', deletaMulher))
app.use(router.patch('/mulheres/:id', corrigeMulher))
app.use(router.post('/mulheres',criaMulher))
app.use(router.get('/mulheres',mostraMulheres))
app.listen(porta,mostraPorta)