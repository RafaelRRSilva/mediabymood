module.exports = {
  cadastro: (req, res) => {
    res.render('cadastro');
  },
  showlogin: (req, res) => {
    res.render('login');
  },
  login: (req, res) => {
    const {email, senha} = req.body;

    const usuarios = require('../database/usuarios.json');

    const usuario = usuarios.find(p => p.email == email && p.senha == senha);

    if(usuario === undefined){
      return res.send("Senha ou e-mail inválidos")
    }

    req.session.usuario = usuario;

    res.redirect('/primeiro_acesso')
  }
}