// const usuarios = require('../database/usuarios.json');
const { sequelize, Usuario } = require('../models');
const fs = require('fs');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

module.exports = {
  cadastro: (req, res) => {
    res.render("cadastro");
  },

  store: async (req, res) => {
    let errors = validationResult(req)
    let emailCadastrado = await Usuario.findAll({
      where: {
        email: req.body.email
      }
    })

    // Verificando se e-mail já está cadastrado
    if(emailCadastrado[0] != undefined) {
      return res.render("cadastro", { old: req.body, errors: {email: {msg: "Email já cadastrado"}}});
    }

    if (errors.isEmpty()) {
      console.log("Sem erros");

      // let novoUsuario = req.body;
      // console.log(novoUsuario)

      let { nome, email, senha } = req.body;
      const hash = bcrypt.hashSync(senha, 10)
      let novoUsuario = await Usuario.create(
        { nome, email, senha: hash }
      ).catch(err => console.log(err))

      // Criando session do usuario recém cadastrado para conseguir redirecionar sem fazer login
      novoUsuario.senha = undefined
      delete novoUsuario.senha

      req.session.usuario = novoUsuario

      res.redirect('/escolha_estado')
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
      where: {
        email: email,

      }
    }).catch(console.trace);



    if (!usuario) {

      return res.render('login', { error: "Login/Senha inválidos" });

    }
    const senhaValida = bcrypt.compareSync(senha, usuario.senha)
    if (!senhaValida) {

      return res.render('login', { error: "Login/Senha inválidos" });

    }
    usuario.senha = undefined
    delete usuario.senha
    req.session.usuario = usuario;

    // Verificando infos do usuário na session
    // console.log(req.session.usuario.toJSON());
    if (usuario.eh_admin) {
      res.redirect('/formulario')
    }
    
      else {
    res.redirect('/comofunciona')
    }
  },
  logout: async (req, res) => {
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

