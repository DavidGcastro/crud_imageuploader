const db = require('../index');
const Sequelize = require('sequelize');

const Questions = db.define(
  'questions',
  {
    question: {
      type: Sequelize.TEXT
    }
  },
  { timestamps: false }
);

module.exports = Questions;
