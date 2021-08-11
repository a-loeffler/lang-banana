const router = require('express').Router();
const asyncHandler = require('express-async-handler');

//backend routes
const sessionRouter = require('./session');
const usersRouter = require('./users');
const tracksRouter = require('./tracks');
const metaRouter = require('./meta');
const searchRouter = require('./search');
const albumsRouter = require('./albums');


router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/tracks', tracksRouter);

router.use('/meta', metaRouter);

router.use('/search', searchRouter)

router.use('/albums', albumsRouter)

router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
  });

module.exports = router;
