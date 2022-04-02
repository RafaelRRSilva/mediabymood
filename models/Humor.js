module.exports = (sequelize, DataTypes) => {
    let humor = sequelize.define(
      'Humor',
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
        }
      },
      {
        tableName: 'humores',
        timestamps: false,
        freezeTableName: true
      }
    )

    humor.associate = (models) => {
      humor.belongsToMany(models.Filme,
        {
          as: 'filme',
          through: 'filmes_has_humores',
          foreignKey: 'humores_id',
          otherKey: 'filmes_id',
          timestamps: false
        }
      )
    }

    return humor;
  }