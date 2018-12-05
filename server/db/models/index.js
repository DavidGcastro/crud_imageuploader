'use strict';
const db = require('../index');
const Sequelize = require('sequelize');
const user = require('./user');
const question = require('./question');
const answer = require('./answer');
const photo = require('./photo');

const questionsSelected = db.define(
  'questionsSelected',
  {},
  { timestamps: false }
);

photo.belongsTo(user);
user.hasMany(photo);
user.hasMany(answer, { onDelete: 'CASCADE' }); //target table
answer.belongsTo(user);
answer.belongsTo(question);
question.hasMany(answer, { onDelete: 'CASCADE' });
user.belongsToMany(question, { through: questionsSelected });
question.belongsToMany(user, { through: questionsSelected });

module.exports = { db, user, photo, question, answer };
