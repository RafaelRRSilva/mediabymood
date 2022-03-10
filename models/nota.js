'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nota extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Nota.init({
    id_filme: DataTypes.INTEGER,
    id_usuario: DataTypes.INTEGER,
    nota: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Nota',
  });
  return Nota;
};