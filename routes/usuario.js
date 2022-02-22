const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const ValidadorFormCadastro = require('../middlewares/ValidadorFormCadastro');
// const UsuarioLogado = require('../middlewares/UsuarioLogado');

router.get('/cadastro', usuarioController.cadastro);
router.post('/cadastro', ValidadorFormCadastro, usuarioController.store);
router.get('/login', usuarioController.showlogin);
router.post('/login', usuarioController.login);
// router.get('/primeiro_acesso', UsuarioLogado, usuarioController.primeiro_acesso);
// router.get('/escolha_estado', UsuarioLogado, usuarioController.estadoDeHumor);
// router.get('/indicacao', UsuarioLogado, usuarioController.indicacao)

module.exports = router;