// Importando o Express
const path = require('path');
const express = require('express');
const session = require('express-session');
const method= require ('method-override')

// Importando middleware de autenticação
const UsuarioLogado = require('./middlewares/UsuarioLogado')

// Importando o CreateError
const createError = require('http-errors');

// Importando o roteador
const rotasIndex = require('./routes/index');
const rotasUsuario = require('./routes/usuario');
const rotasOperacoes = require ('./routes/operacoes');
const rotasIndicacao = require('./routes/indicacaoRouter')

// Criar servidor
const app = express();

// Configurando Express: EJS como View Engine, pasta Public
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Configurando o processamento de formulários
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Configurando o Secret da Session
app.use(session({
    secret:"SEGREDO"
}))
app.use(method('_method'));
app.use(function(req,res,next){
    res.locals.usuario=req.session.usuario
    res.locals.caminho=req.path
    next()
})
// Definição de rotas
app.use('/', rotasIndex);
app.use('/', rotasUsuario);
app.use('/indicacao', UsuarioLogado, rotasIndicacao)
app.use ('/', rotasOperacoes);


app.use(function (req, res, next) {
    next(createError(404));
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

// Levantando o servidor
app.listen(3000, ()=> console.log('Servidor rodando na porta: localhost3000'));