const S = require('sequelize');
const db = require('../db');

class Favourite extends S.Model {
}

Favourite.init(
  {
    movieId: {
      type: S.DataTypes.INTEGER,
    },
  },
  {
    sequelize: db,
    modelName: 'favourites',
  }
);


module.exports = Favourite;
