const filmesController = require ('../controllers/filmesController');
const express = require('express');
const router = express.Router();

router.get('/:id/nota', filmesController.nota);
router.post('/:id/nota',filmesController.recebenota);

module.exports = router;
