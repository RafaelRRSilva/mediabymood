'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

     await queryInterface.addColumn('usuarios', 'email', {
       type: Sequelize.STRING(120),
       allowNull: false,
       unique: true
      });

      await queryInterface.addColumn('usuarios', 'senha', {
        type: Sequelize.STRING(60),
        allowNull: false
       });

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

     await queryInterface.removeColumn('usuarios', 'email', {});
     await queryInterface.removeColumn('usuarios', 'senha', {});

  }
};
