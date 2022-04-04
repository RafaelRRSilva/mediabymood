const {sequelize, Filme, Humor} = require('../models');

Filme.findAll({include: 'humor'}).then(
  data => {
    console.log(data[0].toJSON());
    sequelize.close();
  }
)