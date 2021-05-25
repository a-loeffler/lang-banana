const express = require('express');
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');


const router = express.Router();



//Get a big amount of tracks

router.get('/', asyncHandler(async (req, res) => {

    const topTen = await db.Track.findAll( {where: {}})




    //create a big object with keys related to what will go in each carousel...
    // const bigFetchObject = {topFifty, hot, spanish, mandarin, german, trendingUsers}
    return res.json({bigFetch})


}));



module.exports = router;
