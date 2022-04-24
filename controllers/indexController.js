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

  indicacao: async (req, res) => {

    // Capturando id da URL
    let id_humor = req.params.id_humor;
    let niv_humor = req.params.niv_humor;

    // Capturando info do usuario
    console.log(req.session.usuario)

    // Objeto trazido do BD com id do humor passado pela URL
    let busca = await Humor.findAll({
        include: ["filme", "nivel"],
        where: {
          id: id_humor
        }
      }
    );

    // Capturando o array de filmes
    let filmesBusca = busca[0].toJSON();

    // Filtrando array de filmes segundo nível do humor
    let buscaPorNivel = filmesBusca.nivel.filter(f => f.nivel == 3)
    let filmesDoNivel = await Filme.findByPk(buscaPorNivel[0].filmes_id)
    console.log(filmesDoNivel.toJSON())

    // Montando objeto com id e nome do humor selecionado
    let {id, nome} = filmesBusca;
    nome = nome[0].toUpperCase() + nome.slice(1);
    let infoHumor = {id, nome};
    console.log(infoHumor)

    // Número aleatorio dentro de humor selecionado
    let num_alea = Math.floor(Math.random()* filmesBusca.filme.length)

    let filme_aleatorio = filmesBusca.filme[num_alea]

    // Gerar registro em usuarios filmes_has_usuarios

    res.render("indicacao", {filme_aleatorio, infoHumor});

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
