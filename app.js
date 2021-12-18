const express = require('express');
const app = express();

const rotasIndex = require('./routes/index')

app.use('/index', rotasIndex)

app.get('/', (req,res) => {
  res.send('Olá mundo!');
});

app.listen(3000, ()=> console.log('Servidor rodando...'));