const express = require('express') //coloca na constante o pacote express, deixar disponível para quando for necessário
const app = express() //recurso da biblioteca express
const porta = 3333  //em que porta estará rodando

function mostraPorta(){ //só para testar o funcionamento
    console.log('Servidor criado e rodando na porta ', porta);
}

app.listen(porta,mostraPorta) //inicia a aplicação, depois de escutar a porta executa mostraPorta


//inicia o servidor node server.js
//acessa no navegador localhost:3333 para visualizar o que esse app está servindo
//nesse exemplo como não está servindo nada irá aparecer 'Cannot GET'