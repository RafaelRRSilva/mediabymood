const express = require('express');
const router = express.Router();
const operacionalController= require ('../controllers/operacionalController')
const indexController = require('../controllers/indexController');
const multer = require('../middlewares/upload');

router.get('/search', operacionalController.search);
router.get('/editar/:id', operacionalController.edit);
router.put('/editar/:id',multer, operacionalController.update);
router.delete('/apagar/:id', operacionalController.delete);

router.get('/lista', indexController.listarFilmes);


module.exports = router;