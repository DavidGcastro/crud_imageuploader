const faker = require('faker');
const { db, user, question, answer } = require('./models');
const Promise = db.Promise; // gives us Promise.map
// let allQuestions;
// let allUsers;
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
  allQuestions = await seedQuestions();
  console.log('DB Seeded!');
}

// function seedUsers() {
//   return Promise.all(
//     new Array(6).fill(1).map(() =>
//       user.create({
//         firstName: faker.name.firstName(),
//         lastName: faker.name.lastName(),
//         email: faker.internet.exampleEmail(),
//         password: 'password'
//       })
//     )
//   );
// }

function seedQuestions() {
  return Promise.all(
    qs.map(x =>
      question.create({
        question: x
      })
    )
  );
}

// function seedAnswers() {
//   return Promise.all(
//     new Array(10).fill(1).map(() =>
//       answer
//         .create({
//           response: faker.lorem.sentences()
//         })
//         .then(answer => {
//           answer.setUser(allUsers[random(6)]);
//           answer.setQuestion(allQuestions[random(6)]);
//         })
//     )
//   );
// }

module.exports = seed;
