const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const UsuarioNaoPrecisa = require('../middlewares/UsuarioNaoPrecisa');
const ValidadorFormCadastro = require('../middlewares/ValidadorFormCadastro');
// const UsuarioLogado = require('../middlewares/UsuarioLogado');

router.get('/cadastro', usuarioController.cadastro);
router.post('/cadastro', ValidadorFormCadastro, usuarioController.store);
router.get('/login', UsuarioNaoPrecisa, usuarioController.showlogin);
router.post('/login', usuarioController.login);
router.get('/logout', usuarioController.logout)
// router.get('/primeiro_acesso', UsuarioLogado, usuarioController.primeiro_acesso);
// router.get('/escolha_estado', UsuarioLogado, usuarioController.estadoDeHumor);
// router.get('/indicacao', UsuarioLogado, usuarioController.indicacao)

module.exports = router;