const express = require('express');
const router = express.Router();
const indicacaoController = require('../controllers/indicacaoController');

router.get('/resetar/:id?', indicacaoController.resetar)
router.get('/:id_humor/:niv_humor?', indicacaoController.indicar);


module.exports = router;