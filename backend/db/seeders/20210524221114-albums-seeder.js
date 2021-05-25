'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Albums', [
      {
        creatorId: 1,
        languageId: 1,
        topicId: 1,
        name: "Beginner English Day 1",
        coverArtUrl: 'https://i.ibb.co/XSSZnYp/albumimggeneric.png',
      },
      {
        creatorId: 5,
        languageId: 5,
        topicId: 1,
        name: "Auf Deutsch!",
        coverArtUrl: 'https://i.ibb.co/XkFbHNt/albumimg3.png',
      },
      {
        creatorId: 9,
        languageId: 8,
        topicId: 21,
        name: "At the Restaurant",
        coverArtUrl: 'https://i.ibb.co/wW7QVt4/albumimg4.png',
      },
      {
        creatorId: 9,
        languageId: 8,
        topicId: 19,
        name: "Beginner Mandarin",
        coverArtUrl: 'https://i.ibb.co/wW7QVt4/albumimg4.png',
      },
      {
        creatorId: 11,
        languageId: 9,
        topicId: 19,
        name: "Hangeul/Korean - Intermediate",
        coverArtUrl: 'https://i.ibb.co/DDG2HZg/albumimg5.png',
      },
      {
        creatorId: 11,
        languageId: 9,
        topicId: 19,
        name: "Hangeul/Korean - Expert",
        coverArtUrl: 'https://i.ibb.co/DDG2HZg/albumimg5.png',
      },
      {
        creatorId: 10,
        languageId: 2,
        topicId: 5,
        name: "¿Dónde están los baños?",
        coverArtUrl: 'https://i.ibb.co/VmJf7gB/albumimg2.png',
      },
      {
        creatorId: 10,
        languageId: 2,
        topicId: 25,
        name: "Uno, dos, tres mi compadre",
        coverArtUrl: 'https://i.ibb.co/VmJf7gB/albumimg2.png',
      },
      {
        creatorId: 7,
        languageId: 22,
        topicId: 8,
        name: "Let's be friends",
        coverArtUrl: 'https://i.ibb.co/VmJf7gB/albumimg2.png',
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
