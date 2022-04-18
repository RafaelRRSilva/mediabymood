const {Filme}= require ('../models');

const Sequelize= require('sequelize');
const Op = Sequelize.Op
const operacionalController={
   search:async(req, res)=>{
    const {key} = req.query;
    const filmesCadastrados= await Filme.Findall({
        where:{
         tituto:{
             [Op.like]:`%${key}%`
         }
        }
    });
    return res.render ('/lista',{filmesCadastrados})
    },
    edit: async(req, res)=>{
        const {id} = req.params;
        const filmes= await Filme.findByPk(id);
        return res.render ('/editar',{filmes})
    },
    update:async(req, res)=>{
const {id} = req.params;
const {filmes, humores}= req.body;
const resultado = await Filme.update({
    filmes,
    humores
},
{
    where:{
        id_filmes:id,
        id_humores:id
    }


})
 console.log(resultado)
    return res.redirect("/geral")
}
}
 module.exports = operacionalController;
