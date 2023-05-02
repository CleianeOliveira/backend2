const { mongo } = require("mongoose")
const { pushScopeId, render } = require("vue")

Inicialização
    - instalar o node.js
    https://www.youtube.com/watch?v=PCSrXjGetsA&t=1s
    testar se está ok: node -v , versao 18.15.0
    - instalar vscode

Execução dos arquivos
    node nomearquivo.js


Ambiente do Projeto 
    dentro da pasta desejada, no terminal, executa o código
    //npm para instalar pacotes, já instala junto com o node
    //configuracoes iniciais
    npm init -y  //inicializar o projeto (cria o arquivo package.json) -y preenche informações automaticamente
    npm install express //express - modulos basicos (cria a pasta node_modules e o package-lock.json) e atualiza também o package.json

Criar servidor
    cada aplicação será rodada a partir de um servidor, que seria o serviço que ficará rodando
    cria o arquivo  - exemplo server.js
    criar os const e o app
    criar as funções que vão responder alguma informação
    
GET
    cria as rotas e define os getS, o get chama a função criada
    exemplo ola.js 
    exemplo mulher.js: responde com um json
        o servidor está servindo dados sobre uma mulher, porém esses dados estão escritos no arquivo
    exemplo mulheres.js - envia vários objetos

Fazendo o Deploy
    conta no github
    https://github.com/CleianeOliveira/backend1
    criar o arquivo gitignore e coloca node_modules
    ** problemas para o push
    render - https://render.com/
        criar conta - new - web service - conecta com o github 
            Node, npm install, node mulheres (qual comando que roda a aplicação)
            pega o link e coloca /mulheres

POST 
    Criar a rota, definir a função, 
    exemplo mulheres.js
    funcao criamulher e router
    instala a biblioteca de gerar Id, npm install uuid
    não dá para testar no navegador, tem que ter o front end (formulario pronto)
        Insomnia, simula o formulario - https://insomnia.rest/download
        cria uma requisição post, endereço http://localhost:3333/mulheres
        app.use(express.json()) para poder receber json
        cria um json que será enviado para o backend
        clica em send, o servidor tem que estar rodando

PATCH (alterar)
    exemplo mulheres.js
    na rota vai passar o Id
    função corrigeMulher
    testa pelo insomnia, na rota passa o id e a resposta é o vetor atualizado
    http://localhost:3333/mulheres/1

DELETE
    exemplo mulheres.js
    semelhante ao patch
    cria a função e configura a rota
    testa no insomnia só com a rota

BANCO DE DADOS
MONGODB
    orientado a documentos
    disponibiliza na web
    criar conta no MONGODB - account.mongodb.com
    configurar espaço - 
        security >> network access >> add ip access list FileSystemEntry, allow access from anywhere
        database >> create database
        security >> database access, criar usuario e SpeechRecognitionAlternative
        quickstart - clou environmnet - finish and close
        no database, cluster, clicar em conectar, connect your application
        drivers - copia o codigo solicitado
    usar no Projeto
        pacote mongoose - npm install mongoose
        cria arquivo bancoDeDados.js para escrever a configuração com o banco e conexão
        exemplo mulheres_mongo
    modelo do objeto mulher
        model / collection
        mulherModel.js
    editar as funções  
        importar o model
        adiciona async / await,  try/catch toda vez que comunicar com o MONGODB
        exclui várias funcoes anteriores que não se conectavam com o mongo
        exemplo mulheres_mongo.js
    salvar no mongo
        usa o insomnia para enviar os dados, e a conexão fará conectar com o mongodb online    
        tem que alterar os privilegios do usuário para readWriteAnyDatabase (https://stackoverflow.com/questions/50950744/mongodb-atlas-mongoerror-user-is-not-allowed-to-do-action-insert-on-test-pr)
        localmente dá para interagir com o bd online
    proteger os dados
        npm install dotenv
        criar um arquivo .env, cria a variável MONGO_URL
        acrescenta o arquivo .env no .gitignore e cria o .env_example para listar as variáveis que o usuário precisará ter
        no arquivo bancoDeDados.js faz o require do dotenv
    fazer a liberação do cors 
        npm install cors
        no arquivo do servidor, mulheres_mongo faz o require do cors
        faz a api usar o cors
    
Deploy  
    render - environmnet - variaveis de ambiente para o MONGO_URL
    manual deploy - deploy latest commit 

Conectar com o front    
    baixar o arquivo do front - https://github.com/euprogramo/front-programaria-react
    npm install para instalar todas as dependencias
    no arquivo Content.jsx, na linha baseURL trocar pela linha do render 






