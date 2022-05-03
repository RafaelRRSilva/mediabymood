'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('filmes_has_humores',
     [
      {filmes_id: 1, humores_id: 1, nivel: 2},
      {filmes_id: 1, humores_id: 2, nivel: 5},
      {filmes_id: 1, humores_id: 4, nivel: 2},

      {filmes_id: 2, humores_id: 1, nivel: 3},
      {filmes_id: 2, humores_id: 2, nivel: 2},
      {filmes_id: 2, humores_id: 5, nivel: 3},

      {filmes_id: 3, humores_id: 2, nivel: 4},
      {filmes_id: 3, humores_id: 4, nivel: 4},

      {filmes_id: 4, humores_id: 3, nivel: 2},
      {filmes_id: 4, humores_id: 4, nivel: 5},

      {filmes_id: 5, humores_id: 1, nivel: 3},
      {filmes_id: 5, humores_id: 4, nivel: 2},
      {filmes_id: 5, humores_id: 5, nivel: 4},

    ], {});

  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('filmes_has_humores', null, {});

  }
};
