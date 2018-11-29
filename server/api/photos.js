const router = require('express').Router();
const { photo } = require('../db/models/index');

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
