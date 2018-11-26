const db = require('../index');
const Sequelize = require('sequelize');

const questions = db.define('question', {
  question: {
    type: Sequelize.TEXT
  }
});

module.exports = questions;
