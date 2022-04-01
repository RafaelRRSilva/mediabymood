// const usuarios = require('../database/usuarios.json');
const {sequelize, Usuario} = require('../models');
const fs = require('fs');
const { validationResult } = require('express-validator');

module.exports = {

  cadastro: (req, res) => {

    res.render('cadastro');

  },

  store: async (req, res) => {

    let errors = validationResult(req);

    console.log('Controller funcionando')

    if (errors.isEmpty()) {

      console.log('Sem erros')

      // let novoUsuario = req.body;
      // console.log(novoUsuario)

      let {nome, email, senha} = req.body;
      let novoUsuario = await Usuario.create(
        {nome, email, senha}
      )

      res.redirect('/login')

    } else {

      res.render('cadastro', {errors:errors.mapped(), old:req.body})

    }
  },

  showlogin: (req, res) => {

    res.render('login', { error: null });

  },

  login: async (req, res) => {

    const { email, senha } = req.body;

    const usuario = await Usuario.findOne({
      where:{
        email:email,
        senha:senha
      }
    })
    .catch(console.trace)

  
    if (usuario === undefined) {

      return res.render('login', { error: "Login/Senha inválidos" });

    }

    req.session.usuario = usuario;

    res.redirect('/primeiro_acesso')
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

}