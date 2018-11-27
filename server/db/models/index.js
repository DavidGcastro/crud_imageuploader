'use strict';
const db = require('../index');
const user = require('../models/user');
const questions = require('../models/questions');
const answer = require('../models/answer');
const photos = require('../models/photos');

photos.belongsTo(user);
user.hasMany(photos);

questions.hasMany(answer);
answer.belongsTo(user);
// Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db
// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)
// Exporting all models from here seems like a good idea!

// This is also probably a good place for you to set up your associations

module.exports = { db, user, photos, questions };
