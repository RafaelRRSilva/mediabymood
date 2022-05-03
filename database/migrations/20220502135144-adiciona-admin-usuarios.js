'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('usuarios', 'eh_admin',Sequelize.BOOLEAN)
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.removeColumn('usuarios', 'eh_admin')
  }
};
