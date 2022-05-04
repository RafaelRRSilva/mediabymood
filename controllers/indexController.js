const {Filme}= require ('../models')
const session = require('express-session')

const Sequelize= require('sequelize')
const Op = Sequelize.Op

const controller = {
  home: (req, res) => {
    res.render("home");
  },

  primeiro_acesso: (req, res) => {
    res.render("primeiro_acesso");
  },

  estadoDeHumor: (req, res) => {
    res.render("escolha_estado");
  },

  contato: (req, res) => {
    res.render("contato");
  },
  como: (req, res) => {
    res.render("comofunciona");
  },
  form: (req, res) => {
    res.render("formulario");
  },

  // postForm: async (req, res) => {
  //   const { filme } = req.body;

  //   const novo = await NovoFilme.findOne({
  //     where: {
  //       filme: filme,
  //     },
  //   }).catch(console.trace);

  //   return res.render("formulario");

  //   req.session.novo = novo;

  //   res.redirect("/primeiro_acesso");
  // },
  postForm: async (req, res) => {

    const { filme } = req.body;
  
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
    //let page = req.query.page || 1
    let { page = 1 } =  req.query;
    const filme = await Filme.findAll({
      limit: 2,
      offset: (page-1)  * 2,
      include:['humor']
    })
    const contagem = await Filme.count()
    const qntPaginas = Math.ceil(contagem / 2)
    return res.render('lista', {
      filmesCadastrados:filme,
      paginas:qntPaginas
    });

  }
};


module.exports = controller