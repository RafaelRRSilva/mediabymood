const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');
const UsuarioLogado = require('../middlewares/UsuarioLogado');

router.get('/', indexController.home);
router.get('/primeiro_acesso', UsuarioLogado, indexController.primeiro_acesso);
router.get('/escolha_estado', UsuarioLogado, indexController.estadoDeHumor);
router.get('/indicacao', UsuarioLogado, indexController.indicacao);
router.get('/contato', indexController.contato);
router.get('/comofunciona', indexController.como);

module.exports = router;