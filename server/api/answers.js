const router = require('express').Router();
const { answer, question } = require('../db/models/index');

router.get('/', (req, res, next) => {
  answer
    .findAll({
      include: [{ model: question }]
    })
    .then(answers => res.send(answers))
    .catch(err => next(err));
});

router.get('/:id', (req, res, next) => {
  let { id } = req.params;
  answer
    .findAll({
      limit: 3,
      where: { userId: id },
      include: [{ model: question }]
    })
    .then(answer => res.send(answer))
    .catch(err => next(err));
});

router.delete('/:id', (req, res, next) => {
  let { id } = req.params;
  answer
    .findOne({
      where: { id }
    })
    .then(answer => answer.destroy())
    .then(x => res.send(x))
    .catch(err => next(err));
});
module.exports = router;
