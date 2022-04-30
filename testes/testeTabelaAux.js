const {sequelize, Filmes_has_Usuarios, Filmes_has_Humores} = require('../models');

let humor = 1;

let busca = async() => {
  let promise = await Filmes_has_Humores.findAll({
    include: "filme",
    where: {
      humores_id: humor
    }
  })

  let filmes = [];

  promise.forEach(element => {
    filmes.push(element.filme.toJSON())
  });

  console.log(filmes)

  // console.log(promise.forEach( e => {
  //   e.filme.toJSON();
  // }))

  sequelize.close();
}

busca()



// Filmes_has_Humores.findAll().then(
//   data => {
//     console.log(data[0].toJSON());
//     sequelize.close();
//   }
// )