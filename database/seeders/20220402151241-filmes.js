'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('filme', [{
        id: 1,
        titulo: "as",
        ano: 1990,
        duracao: 120,
        resumo: "resumo",
        imagem: "rota"
      }], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
