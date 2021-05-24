'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Languages', [
      {
        name: 'English',
      },
      {
        name: 'Spanish',
      },
      {
        name: 'French',
      },
      {
        name: 'Russian',
      },
      {
        name: 'German',
      },
      {
        name: 'Italian',
      },
      {
        name: 'Portuguese',
      },
      {
        name: 'Mandarin',
      },
      {
        name: 'Korean',
      },
      {
        name: 'Japanese',
      },
      {
        name: 'Tagalog',
      },
      {
        name: 'Swedish',
      },
      {
        name: 'Cantonese',
      },
      {
        name: 'Vietnamese',
      },
      {
        name: 'Klingon',
      },
      {
        name: 'Swahili',
      },
      {
        name: 'Arabic',
      },
      {
        name: 'Hebrew',
      },
      {
        name: 'Greek',
      },
      {
        name: 'Thai',
      },
      {
        name: 'Egyptian',
      },
      {
        name: 'Hindi',
      },
      {
        name: 'Burmese',
      },
      {
        name: 'Afrikaans',
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
      return queryInterface.bulkDelete('Languages', null, {});
  }
};
