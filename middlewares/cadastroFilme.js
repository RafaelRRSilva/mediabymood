const { check } = require('express-validator');
const {Filme} =require ('../models');
const validaForm = [
    check('nome')
        .trim()
        .escape()
        .notEmpty().withMessage('nome do filme precisa ser preenchido').bail()
        .isLength({ min: 2, max: 50 }).withMessage('nome do filme deve ter pelo menos 2 caracteres').bail()
        .custom(async(value,{req})=>{
            const meuFilme = await Filme.findOne({
                where: {
                    titulo:value
                }
            });
            if (meuFilme){
                throw new Error('filme já existe')
            }
            return true
        }),
    

    check('ano')
        .trim()
        .escape()
        .notEmpty().withMessage('ano do filme precisa ser preenchido').bail()
        .toInt()
        .isInt({ gt: 1894 }).withMessage('ano precisa ser maior que 1895'),

    check('duracao')
        .trim()
        .escape()
        .notEmpty().withMessage('duração do filme precisa ser preenchida').bail()
        .toInt()
        .isInt({ gt: 5 }).withMessage('duração precisa ser maior que 5 minutos'),

    check('resumo')
      
        .escape()
        .notEmpty().withMessage('resumo do filme precisa ser preenchido').bail()
        .isLength({ min: 20, max: 800 }).withMessage('resumo do filme deve ter pelo menos 20 caracteres'),

    check('img')
   .custom(function(value,{req}){
        if(req.file && req.file.mimetype.indexOf('image/') >=0){
            return true
        }
        return false
    }).withMessage('uma imagem precisa ser inserida'),
        
    check('Humores')
        .escape()
        .notEmpty().withMessage('pelo menos um humor precisa ser selecionado')
];
module.exports = validaForm;