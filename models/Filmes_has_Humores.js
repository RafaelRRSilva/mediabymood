module.exports = (sequelize, DataTypes) => {
  let filmes_has_humores = sequelize.define(
    'Filmes_has_Humores',
    {
      filmes_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      humores_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      nivel: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },

    {
      tableName: 'filmes_has_humores',
      timestamps: false,
      freezeTableName: true
    }
  );



  return filmes_has_humores
}