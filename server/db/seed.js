// const user = require('./models').user;
// const tool = require('./models').tool;
// const faker = require('faker');
// const db = require('./models/index').db;
// const Promise = db.Promise; // gives us Promise.map
// const typeOfTool = [
//   'general',
//   'carpentry',
//   'wood work',
//   'metal work',
//   'farm work'
// ];
// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// async function seed() {
//   await db.sync({ force: true });
//   const users = await seedUsers();
//   const tools = await seedTools();
//   console.log('Seeded', users.length, 'Users.');
//   console.log('Seeded', tools.length, 'Tools.');
// }

// function seedUsers() {
//   return Promise.all(
//     new Array(20).fill(1).map(() =>
//       user.create({
//         firstName: faker.name.firstName(),
//         lastName: faker.name.lastName(),
//         email: faker.internet.email()
//       })
//     )
//   );
// }

// function seedTools() {
//   return Promise.all(
//     new Array(30).fill(1).map(() =>
//       tool.create({
//         name: faker.commerce.productName(),
//         description: faker.lorem.paragraph(),
//         price: faker.commerce.price(),
//         category: typeOfTool[getRandomInt(0, typeOfTool.length)],
//         borrowed: faker.random.boolean(),
//         dueDate: faker.date.future(),
//         userId: getRandomInt(0, 20)
//       })
//     )
//   );
// }
// seed()
//   .then(() => process.exit())
//   .catch(error => console.log(error));
