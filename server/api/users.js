const router = require('express').Router();
const { user, answer } = require('../db/models/index');

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

router.post('/answer', (req, res, next) => {
  let { questionSelected, answerGiven, userId } = req.body;

  // user
  //   .findById(userId)
  //   .then(userFound => {
  //     userFound
  //       .hasQuestion(questionSelected)
  //       .then(bool => {
  //         if (bool) throw Error('Question has already been selected!');
  //       })
  //       .catch(err => next(err));
  //   })
  //   .then(() =>
  answer
    .create({
      response: answerGiven
    })
    .then(newQ => newQ.setQuestion(questionSelected))
    .then(newQ => newQ.setUser(userId))
    // .then(() => {
    //   user
    //     .findOne({ where: { id: userId } })
    //     .then(foundUser => foundUser.addQuestion(questionSelected));
    // })
    .then(() => res.sendStatus(200))
    .catch(err => next(err));
});

//     .catch(err => next(err));
// });

module.exports = router;
