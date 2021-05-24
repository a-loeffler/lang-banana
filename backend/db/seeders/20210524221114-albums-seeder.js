'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        creatorId: 1,
        languageId: 1,
        topicId: 1,
        name: "What is this?",
        coverArtUrl: 'https://ibb.co/MMMDzBp',
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
