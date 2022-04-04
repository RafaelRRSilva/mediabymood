const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');
const admController = require('../controllers/admController');
const UsuarioLogado = require('../middlewares/UsuarioLogado');
const  upload= require('../middlewares/upload');


router.get('/', indexController.home);
router.get('/primeiro_acesso', UsuarioLogado, indexController.primeiro_acesso);
router.get('/escolha_estado', UsuarioLogado, indexController.estadoDeHumor);
// router.get('/indicacao', UsuarioLogado, indexController.indicacao);
router.get('/indicacao', indexController.indicacao);
router.get('/contato', indexController.contato);
router.get('/comofunciona', indexController.como);
router.get('/formulario', admController.form);
router.post('/formulario',upload, admController.postForm);


module.exports = router;