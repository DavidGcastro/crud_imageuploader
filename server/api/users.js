const router = require('express').Router();
const { user, photo, answer } = require('../db/models/index');
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
  user
    .findAll({
      include: [{ all: true }]
    })
    .then(users => res.send(users))
    .catch(err => next(err));
});

router.get('/:id', (req, res, next) => {
  let { id } = req.params;
  user
    .findAll({
      where: { id },
      include: [{ all: true }]
    })
    .then(user => res.send(user))
    .catch(err => next(err));
});

router.post('/photos/:id', (req, res, next) => {
  upload(req, res, err => {
    if (err) {
      console.log(err);
    } else {
      console.log(req.file, 'ffofofofofofofo');
      res.send('test');
    }
  });
  // let { userPhoto } = req.body;
  // let { id } = req.params;

  // console.log(id, req.file);
  // user
  //   .findOne({
  //     where: { id }
  //   })
  //   .then(userFound => {
  //     photo
  //       .create({ name: 'test', photo: req.file.buffer })
  //       .then(newPhoto => userFound.setPhotos(newPhoto))
  //       .catch(err => next(err));
  //   })
  //   .then(x => res.send(x))
  //   .catch(err => next(err));
});

router.post('/answer', (req, res, next) => {
  let { questionSelected, answerGiven, user } = req.body;
  answer
    .create({ response: answerGiven })
    .then(newQ => newQ.setQuestion(questionSelected))
    .then(newQ => newQ.setUser(user))
    .then(() => res.sendStatus(200))
    .catch(err => next(err));
});

module.exports = router;
