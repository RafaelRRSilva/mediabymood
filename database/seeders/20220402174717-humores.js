'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('humores', [
      {
       id: 1,
       nome: "alegre"
      },
      {
        id: 2,
        nome: "apaixonado"
       },
       {
        id: 3,
        nome: "medo"
       },
       {
        id: 4,
        nome: "triste"
       },
       {
        id: 5,
        nome: "triunfo"
       }
    ], {});

  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('humores', null, {});

  }
};
