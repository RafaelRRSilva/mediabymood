const {sequelize, Filmes_has_Usuarios} = require('../models');

Filmes_has_Usuarios.findAll().then(
  data => {
    console.log(data);
    sequelize.close();
  }
)