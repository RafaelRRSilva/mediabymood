// Importando o Express
const express = require('express');
const session = require('express-session');

// Importando o roteador
const rotasIndex = require('./routes/index');
const rotasUsuario = require('./routes/usuario');

// Criar servidor
const app = express();

// Configurando Express: EJS como View Engine, pasta Public
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Configurando o processamento de formulários
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(session({secret:"SEGREDO"}))

// Definição de rotas
app.use('/', rotasIndex);
app.use('/', rotasUsuario);

// Levantando o servidor
app.listen(3000, ()=> console.log('Servidor rodando na porta: localhost3000'));