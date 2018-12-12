const router = require('express').Router();
const { answer, question } = require('../db/models/index');

router.get('/', (req, res, next) => {
  answer
    .findAll({
      limit: 3,
      where: { userId: req.user.id },
      include: [{ model: question }]
    })
    .then(answer => res.send(answer))
    .catch(err => next(err));
});

router.delete('/:id', (req, res, next) => {
  let { id } = req.params;
  if (req.user.id) {
    answer
      .findOne({
        where: { id }
      })
      .then(answer => answer.destroy())
      .then(x => res.send(x))
      .catch(err => next(err));
  } else {
    res.sendStatus(403);
  }
});
module.exports = router;
