const S = require('sequelize');
const db = require('../db');

const bcrypt = require('bcrypt');

class User extends S.Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }
}

User.init(
  {
    email: {
      type: S.DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: S.DataTypes.STRING,
      allowNull: false,
    },
    salt: {
      type: S.DataTypes.STRING,
    },
  },
  {
    sequelize: db,
    modelName: 'users',
  }
);

User.beforeCreate(user => {
  return bcrypt
    .genSalt(16)
    .then(salt => {
      user.salt = salt;
      return user.hash(user.password, salt);
    })
    .then(hash => {
      user.password = hash;
    });
});

module.exports = User;
