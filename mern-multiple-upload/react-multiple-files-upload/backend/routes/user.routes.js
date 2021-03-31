let express = require('express'),
    multer = require('multer'),
    //uuidv4 = require('uuid/v4'),
    router = express.Router();
const { v4: uuidv4 } = require('uuid');
const DIR = './public/';

const helpers = require('./helpers');
const path = require('path');
const { promises: fs } = require("fs")
const fsExtra = require('fs-extra')

var script = require('./script');

const srcDir = './public';
const destDir = './temp/';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});

router.post('/upload-images', (req, res) => {

  let upload = multer({ storage: storage, fileFilter: helpers.slippiFilter }).array('matchesCollection');

  upload(req, res, function(err) {
      if (req.fileValidationError) {
          return res.send(req.fileValidationError);
      }

      //To copy a folder or file  
      copyDir(srcDir, destDir)
  });

});

async function copyDir(src, dest) {
  await fs.mkdir(dest, { recursive: true });
  let entries = await fs.readdir(src, { withFileTypes: true });

  for (let entry of entries) {
      let srcPath = path.join(src, entry.name);
      let destPath = path.join(dest, entry.name);

      entry.isDirectory() ?
          await copyDir(srcPath, destPath) :
          await fs.copyFile(srcPath, destPath);
  }

  fsExtra.emptyDirSync(src);

  script.parse_folder(dest);
  
  fsExtra.emptyDirSync(dest);
}

module.exports = router;