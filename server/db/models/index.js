'use strict';
const db = require('../index');
const user = require('./user');
const question = require('./question');
const answer = require('./answer');
const photo = require('./photo');

const questionsSelected = db.define(
  'questionsSelected',
  {},
  { timestamps: false, freezeTableName: true }
);

photo.belongsTo(user);
user.hasMany(photo);
user.hasMany(answer); //target table
answer.belongsTo(user);
answer.belongsTo(question);
question.hasMany(answer);
// user.belongsToMany(question, { through: questionsSelected });
// question.belongsToMany(user, { through: questionsSelected });

module.exports = { db, user, photo, question, answer };
