const mongoose = require('mongoose') //chama o mongoose
require('dotenv').config()

async function conectaBancoDeDados() { //funcao assincrona, que será executada depois de outra
    try {
        console.log('Conexão com o banco de dados iniciou...')

        await mongoose.connect(process.env.MONGO_URL) //o js não para de executar as outras atividades enquanto esta sendo executada

        console.log('Conectado com sucesso.')
    } catch(erro) {
        console.log(erro)
    }
    
}

module.exports = conectaBancoDeDados //para poder ser usado em outros arquivos

