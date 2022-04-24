const {Filme, Humor, Filmes_has_Usuarios} = require('../models');
const session = require('express-session')

const controller = {
  indicacao: async (req, res) => {

    // Capturando id da URL
    let id_humor = req.params.id_humor;
    let niv_humor = req.params.niv_humor;

    // Capturando info do usuario
    let infoUsuario = req.session.usuario
    console.log(infoUsuario)

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
    //console.log(filmesDoNivel.toJSON())

    // Montando objeto com id e nome do humor selecionado
    let {id, nome} = filmesBusca;
    nome = nome[0].toUpperCase() + nome.slice(1);
    let infoHumor = {id, nome};
    //console.log(infoHumor)

    // Número aleatorio dentro de humor selecionado
    let num_alea = Math.floor(Math.random()* filmesBusca.filme.length)

    let filme_aleatorio = filmesBusca.filme[num_alea]

    // Gerar registro em usuarios filmes_has_usuarios
    if(infoUsuario != undefined){
      let filmes_id = filme_aleatorio.id;
      let usuarios_id = infoUsuario.id;
      console.log({filmes_id, usuarios_id, avaliacao: 0})
      await Filmes_has_Usuarios.create({filmes_id, usuarios_id, avaliacao: 0})
    } else {
      console.log('Não tem usuário logado')
    }

    //let registro_filme_usuario = await Filmes_has_Usuarios.create({});

    res.render("indicacao", {filme_aleatorio, infoHumor, modal:false});

  }
};

module.exports = controller;