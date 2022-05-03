const {sequelize, Filme, Humor} = require('../models');

Filme.findAll({include: ['humor', 'nivel']}).then(
  data => {
    console.log(data[3].toJSON());
    sequelize.close();
  }
)