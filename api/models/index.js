const User = require('./Users');
const Favourite = require('./Favourites');

Favourite.belongsTo(User);
User.hasMany(Favourite);

module.exports = { User, Favourite };
