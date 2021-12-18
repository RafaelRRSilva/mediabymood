// Importando o Express
const express = require('express');
const app = express();

// Importações da pasta routes
const rotasIndex = require('./routes/index')

//Configurando Express: EJS como View Engine, pasta Public
app.set('view engine', 'ejs');
app.use(express.static('public'));


// Definição de rotas
app.get('/', (req,res) => {
  res.send('Olá mundo!');
});

app.use('/index', rotasIndex);


// Levantando o servidor
app.listen(3000, ()=> console.log('Servidor rodando...'));