const faker = require('faker');
const { db, user, question } = require('./models');
const Promise = db.Promise; // gives us Promise.map
let allQuestions;
let allUsers;

async function seed() {
  await db.sync({ force: true });
  allQuestions = await seedQuestions();
  allUsers = await seedUsers();
  console.log('DB Seeded!');
}

function seedUsers() {
  return Promise.all(
    new Array(6).fill(1).map(() =>
      user.create({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.exampleEmail(),
        password: 'password'
      })
    )
  );
}

function seedQuestions() {
  return Promise.all(
    new Array(6).fill(1).map(() =>
      question.create({
        question: faker.lorem.sentence() + '?'
      })
    )
  );
}

module.exports = seed;
