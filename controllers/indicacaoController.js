const {Filme, Humor, Filmes_has_Usuarios, Filmes_has_Humores} = require('../models');
const {Op} = require('sequelize')
const session = require('express-session')

const controller = {
  indicar: async (req, res) => {

    // Capturando id da URL
    let id_humor = req.params.id_humor;
    let niv_humor = req.params.niv_humor;

    // Capturando filme padrão caso não tiver mais para mostrar
    let promisePadrão = await Filme.findByPk(1)
    let filmePadrão = promisePadrão.toJSON();

    // Capturando info do usuario
    let infoUsuario = req.session.usuario
    //console.log(infoUsuario)

    // Criando toggle para modal
    let modal = false;

    // Array que conterá os ids dos filmes já exibidos ao usuário
    let idFilmesExibidos = [];

    // Trazendo os filmes já visualizados pelo usuário
    let buscaFilmesDoUsuario = await Filmes_has_Usuarios.findAll({
      where: {
        usuarios_id: infoUsuario.id
      }
    })

    // Inserindo ids capturados do DB no array
    buscaFilmesDoUsuario.forEach(e => {
      idFilmesExibidos.push(e.filmes_id);
    });
    console.log(idFilmesExibidos);

    // Objeto trazido do BD com id do humor passado pela URL
    let promise = await Filmes_has_Humores.findAll({
        include: "filme",
        where: {
          humores_id: id_humor,
          filmes_id: {
            [Op.notIn]: idFilmesExibidos
          }
        }
      }
    );


    // Capturando o array de filmes
    let filmesBusca = [];

    // Tratando erro quando não tem mais filmes para exibir
    if (promise.length == 0){
      filmesBusca = [1];
      modal = true;
    }
    promise.forEach(e => {
      filmesBusca.push(e.filme.toJSON());
    })
    // console.log(filmesBusca)

    // Número aleatorio dentro de humor selecionado
    let num_alea = Math.floor(Math.random()* filmesBusca.length)
    let filme_aleatorio = filmesBusca[num_alea]
    console.log(filme_aleatorio)

    // Filtrando array de filmes segundo nível do humor
    // let buscaPorNivel = filmesBusca.nivel
    // let filmesDoNivel = await Filme.findByPk(buscaPorNivel[0].filmes_id)
    //console.log(filmesDoNivel.toJSON())

    // Montando objeto com id e nome do humor selecionado
    let id = id_humor;
    let objHumor = await Humor.findByPk(id_humor);
    let nome = objHumor.nome;
    nome = nome[0].toUpperCase() + nome.slice(1);
    let infoHumor = {id, nome};
    //console.log(infoHumor)



    // Adicionando filme aleatório a array de filmes já indicados
    // filmesJaIndicados.push(filme_aleatorio.id)
    // console.log(filmesJaIndicados)

    // Gerar registro em usuarios filmes_has_usuarios
    if(infoUsuario != undefined){

      let filmes_id = filme_aleatorio.id;
      let usuarios_id = infoUsuario.id;
      //console.log({filmes_id, usuarios_id, avaliacao: 0})
      await Filmes_has_Usuarios.create({filmes_id, usuarios_id, avaliacao: 0})
      .catch((err)=>{
        modal = true;
        console.log("O erro está aqui: "+ err);
        console.log(modal);
      })

    } else {
      console.log('Não tem usuário logado')
    }

    //let registro_filme_usuario = await Filmes_has_Usuarios.create({});


    res.render("indicacao", {filme_aleatorio, infoHumor, modal, filmePadrão});

  },

  resetar: async (req, res) => {

    if(req.session != undefined) {
      let infoUsuario = req.session.usuario
      let idHumor = req.params.id

      await Filmes_has_Usuarios.destroy({
        where: {usuarios_id:infoUsuario.id}
      }).catch((err) => {
        console.log(err)
      })

      res.redirect('/indicacao/'+idHumor)
    } else {
      res.send("Precisa ter um usuário logado")
    }

    // console.log("O id do humor é " + req.params.id)
  }
};

module.exports = controller;