const db = require('../index');
const Sequelize = require('sequelize');

const Photos = db.define(
  'photo',
  {
    path: {
      type: Sequelize.STRING
    }
  },
  { timestamps: false }
);

const editPath = photo => {
  let beginSlice = photo.get('path').indexOf('/');
  this.path = photo.get('path').slice(beginSlice);
};

Photos.beforeSave(editPath);

module.exports = Photos;
