// Importando o Express
const express = require('express');
const app = express();

// Importações da pasta routes
const rotasIndex = require('./routes/index')

//Configurando EJS como o View Engine
app.set('view engine', 'ejs');


// Definição de rotas
app.get('/', (req,res) => {
  res.send('Olá mundo!');
});

app.use('/index', rotasIndex);


// Levantando o servidor
app.listen(3000, ()=> console.log('Servidor rodando...'));