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

const matches = require("../controllers/matches.controller.js");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname;
        cb(null,fileName)
    }
});

router.post('/upload-slp', async (req,res) => {

  let upload = multer({ storage: storage, fileFilter: helpers.slippiFilter }).array('matchesCollection');

  var payload = null;

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  await upload(req, res, async function(err) {
      if (req.fileValidationError) {
          return res.send(req.fileValidationError);
      }
      //To copy a folder or file  
      payload = await copyDir(srcDir, destDir);
  });

  while(payload === null){
    await sleep(200);
  }
  res.payload = payload;
  res.json(payload);
});

router.get("/stats", matches.findAll);

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

  var payload = await script.parse_folder(dest);
  
  fsExtra.emptyDirSync(dest);

  return payload;
}

module.exports = router;