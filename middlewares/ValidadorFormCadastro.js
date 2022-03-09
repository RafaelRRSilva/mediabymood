const {check} = require('express-validator');

const validacoes = [
    check('nome')
        .notEmpty().withMessage('O campo nome deve ser preenchido').bail()
        .isLength({min: 2, max: 30}).withMessage('O campo nome deve ter pelo menos 2 caracteres'),

    // check('sobrenome')
    //     .notEmpty().withMessage('O campo sobrenome deve ser preenchido')
    //     .isLength({min: 5, max: 50}).withMessage('O campo sobrenome deve ter pelo menos 5 caracteres')
    //     .bail(),

    check('email')
        .notEmpty().withMessage('O campo e-mail deve ser preenchido').bail()
        .isEmail().withMessage('Precisa ser um e-mail válido'),

    check('senha')
        .notEmpty().withMessage('O campe de senha precisa ser preenchido'),

    check('confirmarSenha')
        .notEmpty().withMessage('O campo de confirmar senha precisa ser preenchido')
];

module.exports = validacoes;