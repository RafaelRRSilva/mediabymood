const controller = {
  home: (req,res) => {
    res.render('home');
  },
  primeiro_acesso: (req,res) => {
    res.render('primeiro_acesso');
  }
}

module.exports = controller;