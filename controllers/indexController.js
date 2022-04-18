const {Filme}= require ('../models')
const Sequelize= require('sequelize')
const Op = Sequelize.Op
const controller = {

  home: (req,res) => {
    res.render('home');
  },

  primeiro_acesso: (req,res) => {
    res.render('primeiro_acesso');
  },

  estadoDeHumor: (req, res) => {
    res.render('escolha_estado');
  },

  indicacao: (req, res) => {
    res.render('indicacao');
  },

  contato: (req,res) => {
    res.render('contato');
  },
  como: (req,res) => {
    res.render('comofunciona');
  },
form:(req,res) => {
  res.render('formulario');
},

postForm: async (req, res) => {

  const { filme} = req.body;

  const novo = await Filme.findOne({
    where:{
      filme:filme
    }
  });



  

    return res.render('formulario');

  

  req.session.novo = novo;

  res.redirect('/comofunciona');
},
listarFilmes: async(req, res)=>{
  const todosOsFilmes= await Filme.findAll() 
  return res.render('lista', {filmesCadastrados:todosOsFilmes});
 },
 editar:async(req, res)=>{
   const {id} = req.params;
   const filmes= await Filme.findByPk(id);
return res.render('editar', {filmes})
 
 },
 update: async (req,res) => {
   const { nome, Plataforma,duracao, humores,ano,resumo } = req.body
   const filmesEditados= await Filme.update({ nome, Plataforma,duracao, humores,ano,resumo 

 },
 {
 where:{
  id
}
})
return res.redirect('/lista')
},
 findByID: async(req,res)=>{
 let{id} = req.params;
 let filmes = await Filme.findOne({
  where:{
    id:id
  },
  
 })
 

 return res.render('/editar', {filmes})

 },
 search: async (req,res)=> {  
   let {barra} = req.query
   let filmes = await Filme.findAll({
     where:{
      titulo:{
        [Op.like]:`%${barra}%`
      }
     }
   })
 }




}


module.exports = controller;