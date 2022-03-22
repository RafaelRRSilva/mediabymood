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
  }
}

module.exports = controller;