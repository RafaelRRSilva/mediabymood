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

    // Capturando id da URL
    let humor_sel = req.params.id_humor

    // Importação de Models
    let filmes = await Filme.findAll(
      {
        include: 'humor'
      }
    )

    let humores = await Humor.findAll(
      {
        /*
        where: {
          id: humor_sel
        },
        */
        include: 'filme'
      }
    );

    // Selecionando array de humores segundo o req.params
    let filmes_do_humor = humores[humor_sel - 1]

    console.log(humores)

    // Número aleatorio dentro de humor selecionado
    let num_alea = Math.floor(Math.random()* filmes_do_humor.filme.length);

    // Escolha do filme de forma aleatória
    let filme_aleatorio = filmes_do_humor.filme[num_alea].toJSON();

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
