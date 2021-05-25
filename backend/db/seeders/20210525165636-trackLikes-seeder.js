'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TrackLikes', [
      {
        likerId: 1,
        trackId: 1,
      },
      {
        likerId: 1,
        trackId: 3,
      },
      {
        likerId: 1,
        trackId: 4,
      },
      {
        likerId: 2,
        trackId: 60,
      },
      {
        likerId: 3,
        trackId: 60,
      },
      {
        likerId: 4,
        trackId: 60,
      },
      {
        likerId: 5,
        trackId: 60,
      },
      {
        likerId: 12,
        trackId: 60,
      },
      {
        likerId: 1,
        trackId: 65,
      },
      {
        likerId: 2,
        trackId: 65,
      },
      {
        likerId: 3,
        trackId: 65,
      },
      {
        likerId: 4,
        trackId: 65,
      },
      {
        likerId: 5,
        trackId: 65,
      },
      {
        likerId: 6,
        trackId: 65,
      },
      {
        likerId: 7,
        trackId: 65,
      },
      {
        likerId: 8,
        trackId: 65,
      },
      {
        likerId: 9,
        trackId: 65,
      },
      {
        likerId: 10,
        trackId: 65,
      },
      {
        likerId: 11,
        trackId: 65,
      },
      {
        likerId: 12,
        trackId: 65,
      },
      {
        likerId: 11,
        trackId: 38,
      },
      {
        likerId: 7,
        trackId: 38,
      },
      {
        likerId: 5,
        trackId: 38,
      },
      {
        likerId: 2,
        trackId: 38,
      },
      {
        likerId: 2,
        trackId: 45,
      },
      {
        likerId: 4,
        trackId: 45,
      },
      {
        likerId: 10,
        trackId: 45,
      },
      {
        likerId: 12,
        trackId: 45,
      },
      {
        likerId: 1,
        trackId: 2,
      },
      {
        likerId: 2,
        trackId: 2,
      },
      {
        likerId: 6,
        trackId: 2,
      },
      {
        likerId: 8,
        trackId: 2,
      },
      {
        likerId: 12,
        trackId: 2,
      },
      {
        likerId: 4,
        trackId: 12,
      },
      {
        likerId: 10,
        trackId: 12,
      },
      {
        likerId: 11,
        trackId: 12,
      },
      {
        likerId: 12,
        trackId: 12,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TrackLikes', null, {});
  }
};
