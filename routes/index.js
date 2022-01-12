const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

router.get('/', indexController.home);
router.get('/primeiro_acesso', indexController.primeiro_acesso);

module.exports = router;