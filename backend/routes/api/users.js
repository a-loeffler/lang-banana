//resources for route paths from /api/users

const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Album, Track } = require('../../db/models');

const router = express.Router();

//validation error handling
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


const validateSignup = [
    check('email')
      .exists({ checkFalsy: true })
      .isEmail()
      .withMessage('Please provide a valid email.'),
    check('userName')
      .exists({ checkFalsy: true })
      .isLength({ min: 4 })
      .withMessage('Please provide a username with at least 4 characters.'),
    check('userName')
      .not()
      .isEmail()
      .withMessage('Username cannot be an email.'),
    check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors,
];


//routing

router.post('/', validateSignup, asyncHandler(async (req, res) => {
    const { email, password, userName } = req.body;
    const user = await User.signup({ email, userName, password });

    await setTokenCookie(res, user);

    return res.json({ user, });
}));



router.get('/:id(\\d+)/albums', asyncHandler(async (req, res) => {


  const userId = req.params.id;

  const userAlbums = await Album.findAll( { where: { creatorId: userId } } );

  return res.json({ userAlbums })

}));


router.get('/:userId(\\d+)', asyncHandler(async (req, res)=> {

  const userId = parseInt(req.params.userId, 10);

  console.log("~~~~~~~~~~~~~~~~~~~~~~~>", userId)

  const searchObject = {
    include: [{model: Album}, {model: Track}],
    attributes: ['id', 'userName', 'avatarUrl']
  }

  const userData = await User.findByPk(userId, searchObject);

  console.log(userData)

  return res.json({ userData })

}))

module.exports = router;
