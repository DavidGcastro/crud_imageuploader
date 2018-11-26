const crypto = require('crypto');

const generateSalt = () => {
  return crypto.randomBytes(16).toString('base64');
};

const encryptPassword = (plainText, salt) => {
  return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex');
};

const isCorrectPassword = (candidatePwd, salt, password) => {
  return encryptPassword(candidatePwd, salt) === password;
};

module.exports = { generateSalt, encryptPassword, isCorrectPassword };
