const express = require('express');
const router = express.Router();
const indicacaoController = require('../controllers/indicacaoController')

router.get('/:id_humor/:niv_humor?', indicacaoController.indicacao);


module.exports = router;