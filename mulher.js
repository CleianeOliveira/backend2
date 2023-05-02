const express = require('express')
const router = express.Router();

const app = express()
const porta = 3333

function mostraPorta(){
    console.log('Servidor criado e rodando na porta ', porta);
}

function mostraMulher(request,response){
    response.json({
        nome: 'Cleiane Oliveira',
        imagem: 'https://media.licdn.com/dms/image/C4E03AQGMoG-xEnGnrg/profile-displayphoto-shrink_400_400/0/1626125542061?e=1687392000&v=beta&t=WGNJv7yuOUAI4Rs2uYLd8ZDkBCTPjkcX0SRcMZjILmw',
        minibio: 'Professora'
    })
}

app.use(router.get('/mulher',mostraMulher))
app.listen(porta,mostraPorta)