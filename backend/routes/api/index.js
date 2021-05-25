const router = require('express').Router();
const asyncHandler = require('express-async-handler');

//backend routes
const sessionRouter = require('./session');
const usersRouter = require('./users');
const tracksRouter =  require('./tracks');



router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/tracks', tracksRouter);

router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
  });

module.exports = router;
