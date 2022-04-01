const Configmulter= require('../config/configMulter');
const multer = require('multer');
const upload = multer(Configmulter);

module.exports = upload.single('img');
