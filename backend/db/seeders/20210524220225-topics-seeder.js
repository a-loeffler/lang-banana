'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Topics', [
      {
        name: 'Questions',
      },
      {
        name: 'Vocabulary',
      },
      {
        name: 'Animals',
      },
      {
        name: 'Food',
      },
      {
        name: 'Home',
      },
      {
        name: 'School',
      },
      {
        name: 'Neighborhood',
      },
      {
        name: 'Greetings',
      },
      {
        name: 'Work',
      },
      {
        name: 'Family',
      },
      {
        name: 'Etiquette and Customs',
      },
      {
        name: 'Directions',
      },
      {
        name: 'Holidays',
      },
      {
        name: 'Shopping',
      },
      {
        name: 'Clothing',
      },
      {
        name: 'Colors',
      },
      {
        name: 'Furniture',
      },
      {
        name: 'Transportation',
      },
      {
        name: 'Conversation',
      },
      {
        name: 'Vacation',
      },
      {
        name: 'Restaurant',
      },
      {
        name: 'Bank',
      },
      {
        name: 'Days of the Week',
      },
      {
        name: 'Months',
      },
      {
        name: 'Numbers',
      },
      {
        name: 'Other',
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Topics', null, {});
  }
};
