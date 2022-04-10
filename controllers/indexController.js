const {Filme, Humor} = require('../models');

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

  indicacao: async (req, res) => {

    // let humor_selecionado = req.params.id_humor

    let filmes = await Filme.findAll(
      {
        include: 'humor'
      }
    )

    let humores = await Humor.findAll(
      {
        include: 'filme'
      }
    )

    let filme_aleatorio = filmes[0].toJSON();
    console.log(humores[0].toJSON())

    res.render("indicacao", {filme_aleatorio});
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
