const {Usuario} = require('../models')

const CookieLogin = async (req, res, next) => {

  console.log("1: " + req.session.usuario)

  if(req.cookies.logado != undefined && req.session.usuario == null) {
    console.log("2: " + req.cookies.logado)
    let email = req.cookies.logado
    let promise = await Usuario.findAll({
      where: {
        email: email
      }
    })

    let usuario = promise[0].toJSON()
    console.log(usuario)

    if(usuario != undefined) {
      req.session.usuario = usuario
    }

  }

  next();
}

module.exports = CookieLogin