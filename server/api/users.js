const router = require('express').Router();
const { user } = require('../db/models/index');

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
    .findById(id)
    .then(user => res.send(user))
    .catch(err => next(err));
});

router.post('/answer', (req, res, next) => {
  let { questionSelected, answerGiven, userId } = req.body;
  user.findById(userId).then(userFound => {
    userFound
      .addQuestion(questionSelected, {
        through: {
          response: answerGiven
        }
      })
      .then(x => res.send(x))
      .catch(err => next(err));
  });
});

module.exports = router;
