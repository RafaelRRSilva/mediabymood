const {Filme, Humor, Filmes_has_Usuarios} = require('../models');
const session = require('express-session')

const controller = {
  home: (req, res) => {
    res.render("home");
  },

  primeiro_acesso: (req, res) => {
    res.render("primeiro_acesso");
  },

  estadoDeHumor: (req, res) => {
    res.render("escolha_estado");
  },

  contato: (req, res) => {
    res.render("contato");
  },
  como: (req, res) => {
    res.render("comofunciona");
  },
  form: (req, res) => {
    res.render("formulario");
  },

  postForm: async (req, res) => {
    const { filme } = req.body;

    const novo = await NovoFilme.findOne({
      where: {
        filme: filme,
      },
    }).catch(console.trace);

    return res.render("formulario");

    req.session.novo = novo;

    res.redirect("/primeiro_acesso");
  },
};

module.exports = controller;
