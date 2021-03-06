const express = require('express');
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Album, Language, Topic, Track, TrackLikes} = require('../../db/models');

const {splitWordList, punctuation} = require('../../utils/searchtools');
const { Op } = require('sequelize');

const router = express.Router();

router.get('/:searchItems', asyncHandler(async (req, res) => {

    const filterFunction = (word) => {
        return !splitWordList.includes(word);
    }

    const searchItems = req.params.searchItems;

    let processedSearchItems1 = searchItems.split("+");
    let processedSearchItems2 = processedSearchItems1.map(word => {

        while (punctuation.includes(word[word.length - 1])) {
            word = word.slice(0, word.length - 1)
        }

        return word;
    });

    let processedSearchItems3 = processedSearchItems2.filter(word => filterFunction(word))
    

    console.log(processedSearchItems3)

    let trackQueryObject = {where: {}}
    trackQueryObject.where[Op.or] = [];
    trackQueryObject.order = [['createdAt', 'DESC']];

    let userQueryObject = {where: {}}
    userQueryObject.where[Op.or] = [];
    userQueryObject.order = [['createdAt', 'DESC']];

    let albumQueryObject = {where: {}}
    albumQueryObject.where[Op.or] = [];
    albumQueryObject.order = [['createdAt', 'DESC']];
    
    function trackSearch(trackQueryObject) {
        trackQueryObject.include = [{ model: Topic}, { model: Language }, {model: Album}, {model: User}, ]

        processedSearchItems3.forEach(word => {
            trackQueryObject.where[Op.or].push({ name: { [Op.iLike]: `%${word}%`} })
            
            //Topics
            trackQueryObject.where[Op.or].push({ '$Topic.name$': { [Op.iLike]: `%${word}%`} })
    
            //Languages
            trackQueryObject.where[Op.or].push({ '$Language.name$': { [Op.iLike]: `%${word}%`} })
    
            //Albums
            trackQueryObject.where[Op.or].push({ '$Album.name$': { [Op.iLike]: `%${word}%`} })        
        })

        return trackQueryObject;
    }


    function userSearch(userQueryObject) {
        userQueryObject.include = [{ model: Album }]
        processedSearchItems3.forEach(word => {
            userQueryObject.where[Op.or].push({ userName: { [Op.iLike]: `%${word}%`}})
        })
        
        return userQueryObject;
    }

    function albumSearch(albumQueryObject) {
        albumQueryObject.include = [{ model: Language}, {model: Track}, {model: User}]
        processedSearchItems3.forEach(word => {
            albumQueryObject.where[Op.or].push({ name: { [Op.iLike]: `%${word}%`}})
        })
        
        return albumQueryObject;
    }

    const trackSearchResults = await Track.findAll(trackSearch(trackQueryObject))
    const userSearchResults = await User.findAll(userSearch(userQueryObject))
    const albumSearchResults = await Album.findAll(albumSearch(albumQueryObject))


    res.json({ query: { queryTracks: trackSearchResults, queryUsers: userSearchResults, queryAlbums: albumSearchResults}})

}))


module.exports = router