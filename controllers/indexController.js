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

    // Importação de Models
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

    // Número aleatorio dentro de humor selecionado
    let num_alea = Math.floor(Math.random()* humores[0].filme.length);
    console.log(num_alea)

    // Escolha do filme de forma aleatória
    let filme_aleatorio = humores[0].filme[num_alea].toJSON();

    // Envio das informações para a view
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
