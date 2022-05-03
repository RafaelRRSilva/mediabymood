const {sequelize, Filmes_has_Usuarios, Filmes_has_Humores} = require('../models');

// TESTE 03
// Trazendo os filmes já visualizados pelo usuário

let busca = async() => {

  let buscaFilmesDoUsuario = await Filmes_has_Usuarios.findAll({
    where: {
      usuarios_id: 1
    }
  })
  console.log(buscaFilmesDoUsuario[0].toJSON());

  let idFilmesExibidos = [];

  buscaFilmesDoUsuario.forEach(element => {
    idFilmesExibidos.push(element.filmes_id);
  });

  console.log(idFilmesExibidos)

  sequelize.close()
}

busca()


// TESTE 02

// let humor = 1;

// let busca = async() => {
//   let promise = await Filmes_has_Humores.findAll({
//     include: "filme",
//     where: {
//       humores_id: humor,
//       filmes_id: {
//         [Op.notIn]: [1, 2]
//       }
//     }
//   })

//   let filmes = [];

//   promise.forEach(element => {
//     filmes.push(element.filme.toJSON())
//   });

//   console.log(filmes)

//   sequelize.close();
// }

// busca()







// TESTE 01

// Filmes_has_Humores.findAll().then(
//   data => {
//     console.log(data[0].toJSON());
//     sequelize.close();
//   }
// )