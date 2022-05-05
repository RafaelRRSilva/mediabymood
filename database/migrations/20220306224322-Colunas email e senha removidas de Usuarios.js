'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.removeColumn('usuarios', 'email', {});
    await queryInterface.removeColumn('usuarios', 'senha', {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn('usuarios', 'email', {
      type: Sequelize.STRING(120),
      allowNull: false,
      unique: true
     });

     await queryInterface.addColumn('usuarios', 'senha', {
       type: Sequelize.STRING(60),
       allowNull: false
      });
  }
};
