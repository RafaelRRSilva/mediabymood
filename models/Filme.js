module.exports = (sequelize, DataTypes) => {
    let filme = sequelize.define(
      'Filme',
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        titulo: {
          type: DataTypes.STRING(100),
          allowNull: false,
          unique: true
        },
        ano: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        duracao: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        resumo: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        imagem: {
            type: DataTypes.STRING(150),
            unique: true
        }
      },
      {
        tableName: 'filmes',
        timestamps: false,
        freezeTableName: true
      }
    );

    filme.associate = (models) => {
      filme.belongsToMany(models.Humor,
        {
          as: 'humor',
          through: 'filmes_has_humores',
          foreignKey: 'filmes_id',
          otherKey: 'humores_id',
          timestamps: false
        }
      );
      filme.hasMany(models.Filmes_has_Humores,
        {
          foreignKey: 'filmes_id',
          as: 'nivel'
        })
    }

    return filme
  }