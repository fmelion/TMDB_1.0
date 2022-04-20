const Sequelize = require('sequelize');

const db = new Sequelize('TMDB', null, null, {
  host: 'localhost',
  dialect: 'postgres',
  loggin: false,
});

module.exports = db;
