'use strict';
const db = require('../index');
const user = require('./user');
const question = require('./question');
const answer = require('./answer');
const photo = require('./photo');

photo.belongsTo(user);
user.hasMany(photo);
user.belongsToMany(question, { through: answer });
question.belongsToMany(user, { through: answer });
question.hasMany(answer);
answer.belongsTo(question);

module.exports = { db, user, photo, question, answer };
