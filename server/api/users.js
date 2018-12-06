const router = require('express').Router();
const { user } = require('../db/models/index');

router.get('/', (req, res, next) => {
  user
    .findById(req.user.id)
    .then(user => res.send(user))
    .catch(err => next(err));
});

router.post('/answer', (req, res, next) => {
  let { questionSelected, answerGiven } = req.body;
  user.findById(req.user.id).then(userFound => {
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
