// const usuarios = require('../database/usuarios.json');
const {sequelize, Usuario} = require('../models');
const fs = require('fs');
const { validationResult } = require('express-validator');

module.exports = {

  cadastro: (req, res) => {

    res.render('cadastro');

  },

  store: async (req, res) => {

    const errors = validationResult(req);

    if (errors.isEmpty()) {

      const { nome, email, senha, confirmarsenha } = req.body;

      /*const id = usuarios[usuarios.length - 1].id + 1;
      const usuario = { id, nome, sobrenome, email, senha, confirmarsenha };

      usuarios.push(usuario);

      fs.writeFileSync(__dirname + '/../database/usuarios.json', JSON.stringify(usuarios, null, 4), { flag: 'w' });*/

      let usuarioNovo = await Usuario.create({
        nome, email, senha
      })

      res.redirect('/')

    } else {

      res.render('cadastro', { errors: errors.mapped() })

    }
  },

  showlogin: (req, res) => {

    res.render('login', { error: null });

  },

  login: async (req, res) => {

    const { email, senha } = req.body;

    const usuarios = await Usuario.findAll();

    const usuario = usuarios.find(p => p.email == email && p.senha == senha);

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