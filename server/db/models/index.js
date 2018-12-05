'use strict';
const db = require('../index');
const user = require('./user');
const question = require('./question');
const answer = require('./answer');
const photo = require('./photo');

// const questionsSelected = db.define(
//   'questionsSelected',
//   {},
//   { timestamps: false, freezeTableName: true }
// );

photo.belongsTo(user);
user.hasMany(photo);
user.belongsToMany(question, { through: answer });
question.belongsToMany(user, { through: answer });
question.hasMany(answer);
answer.belongsTo(question);

// user.hasMany(answer);
// answer.belongsTo(user);
// answer.belongsTo(question);

// user.belongsToMany(question, { through: questionsSelected });
// question.belongsToMany(user, { through: questionsSelected });

module.exports = { db, user, photo, question, answer };
