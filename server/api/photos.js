const router = require('express').Router();
const { photo } = require('../db/models/index');
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
  destination: './files',
  filename(req, file, cb) {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    );
  }
});
const upload = multer({ storage }).single('userPhoto');

router.get('/', (req, res, next) => {
  photo
    .findAll()
    .then(photos => res.send(photos))
    .catch(err => next(err));
});

router.get('/:id', (req, res, next) => {
  let { id } = req.params;
  photo
    .findAll({
      where: { id }
    })
    .then(photo => res.send(photo))
    .catch(err => next(err));
});

router.post('/:id', upload, (req, res, next) => {
  console.log('fix this');
});

router.delete('/:id', (req, res, next) => {
  let { id } = req.params;
  photo
    .findOne({
      where: { id }
    })
    .then(photo => photo.destroy())
    .then(() => res.sendStatus(200))
    .catch(err => next(err));
});

module.exports = router;
