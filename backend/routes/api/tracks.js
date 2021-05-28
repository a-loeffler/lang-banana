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
            order: [['updatedAt', 'DESC']]
        }
    )

    const hot = allTracks.slice(0, 20);

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
    res.json({topTen, hot, spanish, mandarin, german, english, korean, conversation})


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

router.post("/", singleMulterUpload("file"), validateUpload, asyncHandler(async (req, res) => {
// router.post("/", singleMulterUpload("file"), asyncHandler(async (req, res) => {

    let {name, languageId, topicId, albumId, userId} = req.body;


    if (!albumId) {
      albumId = 10
    };
    // Step 1: If no albumId to add to, create a generic Album and get its id

    // Step 2: Begin building the Track

    // Step 3: Upload Track and get url
    const trackFileUrl = await singlePublicFileUpload(req.file);
    const newTrack = await db.Track.create({
      name, languageId, topicId, albumId, creatorId: userId, trackFileUrl
    })

    console.log(newTrack)

    res.json({newTrack})
}));


router.get('/:id(\\d+)/', asyncHandler(async (req, res) => {
    const trackIdToFind =  req.params.id;

    const track = await db.Track.findByPk(trackIdToFind, {include: [db.TrackLike, db.User, db.Album, db.Language, db.Topic]})

    res.json({ track });
}))

module.exports = router;
