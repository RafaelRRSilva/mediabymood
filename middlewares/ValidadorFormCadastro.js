const {check} = require('express-validator');

const validacoes = [
    check('nome')
        .notEmpty().withMessage('O campo nome deve ser preenchido')
        .isLength({min: 2, max: 30}).withMessage('O campo nome deve ter pelo menos 2 caracteres')
        .bail()
    ,
    check('sobrenome')
        .notEmpty().withMessage('O campo sobrenome deve ser preenchido')
        .isLength({min: 5, max: 50}).withMessage('O campo sobrenome deve ter pelo menos 5 caracteres')
        .bail()
    ,
    check('email')
        .notEmpty().withMessage('O campo e-mail deve ser preenchido')
        .bail()
];

module.exports = validacoes;