const express = require('express');
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');


const router = express.Router();



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



module.exports = router;
