const {sequelize, Sequelize} = require('./models')

sequelize.query("SELECT * FROM filmes", Sequelize.QueryTypes.SELECT)
.then(data => {console.log(data)});