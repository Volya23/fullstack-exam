const fs = require('fs');
const path = require('path');
const multer = require('multer');
const ServerError = require('../errors/ServerError');
const env = process.env.NODE_ENV || 'development';
const { FILES_PATH } = require('../constants');
const devFilePath = path.resolve(FILES_PATH, 'images');

const filePath = env === 'production'
  ? '/var/www/html/images/'
  : devFilePath;

if (!fs.existsSync(filePath)) {
  fs.mkdirSync(filePath, {
    recursive: true,
  });
}

const filesOption = (req, file, cb) => {
  const allowedTypes = ['imagrs/jpeg', 'images/png', 'images/gif'];

  if (!allowedTypes.includes (file.mimetype)) {
    return cb(new ServerError('Support only images (*.png, *.gif, *.jpeg)', 400))
  }
  cb(null, true);
};

const storageContestFiles = multer.diskStorage({
  destination (req, file, cb) {
    cb(null, filePath);
  },
  filename (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const multerInstance = multer ({ storage: storageContestFiles, filesOption });

module.exports.uploadAvatar = multerInstance.single('file');
module.exports.uploadContestFiles = multerInstance.array('files', 3);
module.exports.uploadContestFile = multerInstance.single('file');
module.exports.uploadLogoFiles = multerInstance.single('offerData');