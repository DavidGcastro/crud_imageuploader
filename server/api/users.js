const router = require('express').Router();
const { user, photo } = require('../db/models/index');
// const multer = require('multer');
// const storage = multer.diskStorage({
//   destination: './files',
//   filename(req, file, cb) {
//     cb(null, `${new Date()}-${file.originalname}`);
//   }
// });
// const upload = multer({ storage });

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

router.post('/photos/:id', /*upload.single('userPhoto'),*/ (req, res, next) => {
  let { userPhoto } = req.body;
  let { id } = req.params;
  user
    .findOne({
      where: { id }
    })
    .then(userFound => {
      photo
        .create({ photo: userPhoto })
        .then(newPhoto => userFound.setPhotos(newPhoto))
        .catch(err => next(err));
    })
    .then(x => res.send(x))
    .catch(err => next(err));
});


module.exports = router;
