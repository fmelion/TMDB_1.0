const express = require('express');
const router = express.Router();
const userRouter = require('./userRouter');
const favouriteRouter = require ('./favouriteRouter')

router.use('/users', userRouter);

router.use('/favourites', favouriteRouter);

router.use('/', (req, res) => {
  res.sendStatus(404);
});

module.exports = router;