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
        tilulo: {
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
    )
  
    return filme
  }