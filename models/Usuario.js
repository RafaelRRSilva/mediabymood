module.exports = (sequelize, DataTypes) => {
  let usuario = sequelize.define(
    'Usuario',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome: {
        type: DataTypes.STRING(120),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(120),
        allowNull: false,
        unique: true
      },
      senha: {
        type: DataTypes.STRING(240),
        allowNull: false
      }
    },
    {
      tableName: 'usuarios',
      timestamps: false,
      freezeTableName: true
    }
  )

  return usuario
}