const express = require('express');
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');
const { singlePublicFileUpload, singleMulterUpload } = require('../../awsS3')


const router = express.Router();

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie } = require('../../utils/auth');

//Get a big amount of tracks

router.get('/', asyncHandler(async (req, res) => {

    const likeSorter = (a, b) => {
        return a.TrackLikes.length - b.TrackLikes.length;
    }

    const allTracks = await db.Track.findAll(
        {
            include: [db.TrackLike, db.User, db.Album, db.Language, db.Topic],
        }
    )

    allTracks.sort(function (a, b) {
        return  b.TrackLikes.length - a.TrackLikes.length;
    });

    const topTen = allTracks.slice(0, 10);

    const spanish = allTracks.filter(track => track.Language.name === "Spanish").slice(0, 10);

    const german = allTracks.filter(track => track.Language.name === "German").slice(0, 10);

    const english = allTracks.filter(track => track.Language.name === "English").slice(0, 10);

    const mandarin = allTracks.filter(track => track.Language.name === "Mandarin").slice(0, 10);

    const korean = allTracks.filter(track => track.Language.name === "Korean").slice(0, 10);

    const conversation = allTracks.filter(track => track.Topic.name === "Conversation").slice(0, 10);


    //create a big object with keys related to what will go in each carousel...
    // const bigFetchObject = {topFifty, hot, spanish, mandarin, german, trendingUsers}
    res.json({topTen, spanish, mandarin, german, english, korean, conversation})


}));

//To do: upload validations for tracks... example: name, image mem size, track mem size
// {
//     creatorId: 10,
//     albumId: 8,
//     languageId: 2,
//     topicId: 25,
//     name: "Uno a cincuenta / One to fifty",
// }


const validateUpload = [
    check('name')
      .exists({ checkFalsy: true })
      .isLength({ min: 4 })
      .withMessage('Please provide a name for your track with at least 4 characters.'),
    check('userId')
      .exists({ checkFalsy: true })
      .withMessage('Users cannot upload a track unless signed in.'),
    check('languageId')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a language for your track.'),
    check('topicId')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a topic for your track.'),

    handleValidationErrors,
];

router.post("/", singleMulterUpload("track"), validateUpload, asyncHandler(async (req, res) => {

    // *** creatorId might need to come from user auth ***
    const {name, creatorId, albumId, languageId, topicId} = req.body;
    const trackFileUrl = await singlePublicFileUpload(req.file);
        //need to add trackFileUrl to Track model and the build below

    const track = await Track.build({
        name, creatorId, albumId, languageId, topicId
    });

    //To Do: handle redirection? gotta check on that
}));

module.exports = router;
