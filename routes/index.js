const express = require('express');
const router = express.Router();
const operacionalController= require ('../controllers/operacionalController')
const indexController = require('../controllers/indexController');
const admController = require('../controllers/admController');
const UsuarioLogado = require('../middlewares/UsuarioLogado');
const  upload= require('../middlewares/upload');
const cadastroFilme = require('../middlewares/cadastroFilme');

router.get('/', indexController.home);
router.get('/primeiro_acesso', UsuarioLogado, indexController.primeiro_acesso);
router.get('/escolha_estado', UsuarioLogado, indexController.estadoDeHumor);
// router.get('/indicacao', UsuarioLogado, indexController.indicacao);
router.get('/contato', indexController.contato);
router.get('/comofunciona', indexController.como);
router.get('/formulario', admController.form);
router.post('/formulario',upload,cadastroFilme, admController.postForm);







//router.post('/apagarfilme/:idfilme', admController.apagar);



module.exports = router;