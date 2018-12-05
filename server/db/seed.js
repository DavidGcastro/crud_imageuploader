const faker = require('faker');
const { db, user, question, answer } = require('./models');
const Promise = db.Promise; // gives us Promise.map
let qs = [
  'Go To Karaoke Song...',
  'My Last Meal Would be...',
  'My simple pleasures...',
  'A random fact I love is...',
  'I get along best with people who...'
];

function random(max) {
  let num = Math.floor(Math.random() * max);
  return num;
}

async function seed() {
  await db.sync({ force: true });
  await user.create({
    firstName: 'David',
    lastName: 'Castro',
    email: 'dcastro93@gmail.com',
    password: '123'
  });
  console.log('User created!');
  allQuestions = await seedQuestions();
  console.log('DB Seeded!');
}

function seedQuestions() {
  return Promise.all(
    qs.map(x =>
      question.create({
        question: x
      })
    )
  );
}

module.exports = seed;
