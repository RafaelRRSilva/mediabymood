const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.get('/cadastro', usuarioController.cadastro);
router.post('/cadastro', usuarioController.store);
router.get('/login', usuarioController.showlogin);
router.post('/login', usuarioController.login)

module.exports = router;