const express = require('express');
const favouriteRouter = express.Router();

const { Favourite } = require('../models');

favouriteRouter.get('/getFav/:userId', (req, res) => {
  const { userId, movieId } = req.params;
  Favourite.findAll({ where: { userId } })
    .then(data => res.send(data))
    .catch(e => console.log(e));
});

favouriteRouter.post('/add', (req, res) => {
  Favourite.create(req.body).then(fav => res.send(fav));
});

favouriteRouter.delete('/remove/:userId/:movieId', (req, res) => {
  const { userId, movieId } = req.params;
  Favourite.destroy({ where: { userId, movieId } }).then(() =>
    res.sendStatus(200)
  );
});

favouriteRouter.use('/', function (req, res) {
  res.sendStatus(404);
});

module.exports = favouriteRouter;
