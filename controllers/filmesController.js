const models = require ('../models')

const filmesController = {
    nota:(req,res) =>{
        res.render ('notadofilme')

    },
    recebenota:async (req,res) =>{
         const filmeId = req.params.id
         const nota = req.body.nota
         await models.Nota.create({
          id_usuario:1,
          id_filme:filmeId,
          nota
         })
        res.render ('notadofilme')
    },
      
}
module.exports = filmesController;