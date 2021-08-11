const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Album, Track, User } = require('../../db/models');

const router = express.Router();

router.get('/:albumId(\\d+)', asyncHandler(async (req, res) => {

    console.log("============>", req.params.albumId)
    const albumId = parseInt(req.params.albumId, 10);

    const searchObject = {
        include: [{model: User, attributes: ['userName', 'id', 'avatarUrl']}, {model: Track}]
    }


    const albumData = await Album.findByPk(albumId, searchObject);

    return res.json({albumData})
    
}))


module.exports = router;