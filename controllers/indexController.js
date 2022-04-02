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

  const novo = await NovoFilme.findOne({
    where:{
      filme:filme
    }
  })



  

    return res.render('formulario');

  

  req.session.novo = novo;

  res.redirect('/primeiro_acesso')
}


}


module.exports = controller;