'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('usuarios', [{
      id: 1,
      nome: "Usuario administrador",
      email: "adm@mail.com",
      senha: bcrypt.hashSync('123', 10),
      eh_admin: true
    }], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     await queryInterface.bulkDelete('usuarios', null, {});

  }
};
