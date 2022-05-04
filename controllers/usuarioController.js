// const usuarios = require('../database/usuarios.json');
const {sequelize, Usuario} = require('../models');
const fs = require('fs');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

module.exports = {
  cadastro: (req, res) => {
    res.render("cadastro");
  },

  store: async (req, res) => {
    let errors = validationResult(req);

    console.log("Controller funcionando");

    if (errors.isEmpty()) {
      console.log("Sem erros");

      // let novoUsuario = req.body;
      // console.log(novoUsuario)

      let {nome, email, senha} = req.body;
      const hash= bcrypt.hashSync(senha,10)
      let novoUsuario = await Usuario.create(
        {nome, email,senha:hash}
      )

      res.redirect('/login')
    } else {
      res.render("cadastro", { errors: errors.mapped(), old: req.body });
    }
  },

  showlogin: (req, res) => {
    res.render("login", { error: null });
  },

  login: async (req, res) => {
    const { email, senha } = req.body;

    const usuario = await Usuario.findOne({
      where:{
        email:email,
      
      }
    }).catch(console.trace);
  

  
    if (!usuario ) {

      return res.render('login', { error: "Login/Senha inválidos" });

    }
    const senhaValida= bcrypt.compareSync(senha,usuario.senha)
    if (!senhaValida ) {

      return res.render('login', { error: "Login/Senha inválidos" });

    }
    usuario.senha=undefined
    delete usuario.senha
    req.session.usuario = usuario;

    res.redirect('/comofunciona')
  },
  logout: async (req,res) => {
    await req.session.destroy();
    res.redirect('/');
}

  // primeiro_acesso: (req,res) => {
  //   res.render('primeiro_acesso');
  // },

  // estadoDeHumor: (req, res) => {
  //   res.render('escolha_estado');
  // },

  // indicacao: (req, res) => {
  //   res.render('indicacao');
  // }
};

