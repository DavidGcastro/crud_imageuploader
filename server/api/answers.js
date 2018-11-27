const router = require('express').Router();
const { answer } = require('../db/models/index');

router.get('/', (req, res, next) => {
  answer
    .findAll()
    .then(answers => res.send(answers))
    .catch(err => console.error(err));
});

router.get('/:id', (req, res, next) => {
  let { id } = req.params;
  answer
    .findAll({
      where: { id }
    })
    .then(answer => res.send(answer))
    .catch(err => console.error(err));
});

module.exports = router;
