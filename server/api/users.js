const router = require('express').Router();
const { user, questions } = require('../db/models/index');

router.get('/', (req, res, next) => {
  user
    .findAll({
      include: [{ model: questions }]
    })
    .then(users => res.send(users))
    .catch(err => console.error(err));
});

router.get('/:id', (req, res, next) => {
  let { id } = req.params;
  user.findAll({
    where: { id },
    include: [{ all: true }]
  })
    .then(user => res.send(user))
    .catch(err => console.error(err));
});

module.exports = router;
