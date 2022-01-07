const controller = {
  home: (req,res) => {
    res.render('home');
  },
  cadastro: (req,res) => {
    res.render('cadastro');
  },
  login: (req,res) => {
    res.render('login');
  }
}

module.exports = controller;