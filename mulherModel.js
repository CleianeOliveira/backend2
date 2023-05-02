const mongoose = require('mongoose')

const MulherSchema = new mongoose.Schema({
    nome: { //não precisa de id pq é automatico
        type:String,
        required:true
    },
    minibio: {
        type:String,
        required:true
    },
    imagem: {
        type:String,
        required:true
    },
    citacao: {
        type:String,
        required:true
    }
})

module.exports = mongoose.model('diva',MulherSchema) //diva é a coleção de MulherSchema