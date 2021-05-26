const express = require('express');
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');

const router = express.Router();

//Get language and topic data

router.get('/', asyncHandler(async (req, res) => {

    const languages = await db.Language.findAll( {order: ['name']} );

    const topics = await db.Topic.findAll( {order: ['name']} );

    res.json({languages, topics})


}));


module.exports = router;
