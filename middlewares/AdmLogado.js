module.exports = (req, res, next) => {

     if(req.session.usuario == undefined || req.session.usuario.eh_admin == false){
        return res.redirect('../login');
    }

    next();

}