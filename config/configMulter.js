const multer = require ('multer');
const path = require('path');
const crypto = require ('crypto');
 
const configMulter = {
  storage: multer.diskStorage({
      destination: path.join(__dirname,'..', 'public','img'),
      filename: (req, file,callback) => {
          const hash = crypto.randomBytes(8).toString('hex');
          const filename = hash + '-' + file.originalname;
          callback(null, filename);
      }
  })  
}
module.exports = configMulter