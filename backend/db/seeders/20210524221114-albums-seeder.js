'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Albums', [
      {
        creatorId: 1,
        languageId: 1,
        topicId: 1,
        name: "Beginner English Day 1",
        coverArtUrl: 'https://ibb.co/MMMDzBp',
      },
      {
        creatorId: 5,
        languageId: 5,
        topicId: 1,
        name: "Auf Deutsch!",
        coverArtUrl: 'https://ibb.co/0VYc58r',
      },
      {
        creatorId: 9,
        languageId: 8,
        topicId: 21,
        name: "At the Restaurant",
        coverArtUrl: 'https://ibb.co/Wy0zZCf',
      },
      {
        creatorId: 9,
        languageId: 8,
        topicId: 19,
        name: "Beginner Mandarin",
        coverArtUrl: 'https://ibb.co/Wy0zZCf',
      },
      {
        creatorId: 11,
        languageId: 9,
        topicId: 19,
        name: "Hangeul/Korean - Intermediate",
        coverArtUrl: 'https://ibb.co/Z6HDp01',
      },
      {
        creatorId: 11,
        languageId: 9,
        topicId: 19,
        name: "Hangeul/Korean - Expert",
        coverArtUrl: 'https://ibb.co/Z6HDp01',
      },
      {
        creatorId: 10,
        languageId: 2,
        topicId: 5,
        name: "¿Dónde están los baños?",
        coverArtUrl: 'https://ibb.co/dgj8dPK',
      },
      {
        creatorId: 10,
        languageId: 2,
        topicId: 25,
        name: "Uno, dos, tres mi compadre",
        coverArtUrl: 'https://ibb.co/dgj8dPK',
      },
      {
        creatorId: 7,
        languageId: 22,
        topicId: 8,
        name: "Let's be friends",
        coverArtUrl: 'https://ibb.co/dgj8dPK',
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
      return queryInterface.bulkDelete('Albums', null, {});
  }
};
