module.exports = (sequelize, DataTypes) => {
  let filmes_has_usuarios = sequelize.define(
    'Filmes_has_Usuarios',
    {
      filmes_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      usuarios_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      avaliacao: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },

    {
      tableName: 'filmes_has_usuarios',
      timestamps: false,
      freezeTableName: true
    }
  );



  return filmes_has_usuarios
}