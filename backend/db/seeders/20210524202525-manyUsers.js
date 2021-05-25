'use strict';

const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'bob@bob.com',
        userName: 'Bob the Teacher',
        hashedPassword: bcrypt.hashSync('password'),
        avatarUrl: 'https://i.ibb.co/qy58Z0R/avatar2.png',
      },
      {
        email: 'june@june.com',
        userName: 'Miss June',
        hashedPassword: bcrypt.hashSync('juNe123!'),
        avatarUrl: 'https://i.ibb.co/tBn6FHb/avatar9.png',
      },
      {
        email: 'thedude@dude.com',
        userName: 'the Dude',
        hashedPassword: bcrypt.hashSync('duDe123!'),
        avatarUrl: 'https://i.ibb.co/KqvKQzT/avatar8.png',
      },
      {
        email: 'howdy@howdy.com',
        userName: 'Thunkmaster Flex',
        hashedPassword: bcrypt.hashSync('duDe123!'),
        avatarUrl: 'https://i.ibb.co/Vx4fYFc/avatar5.png',
      },
      {
        email: 'bigmouth@billy.com',
        userName: 'Billy',
        hashedPassword: bcrypt.hashSync('billY123!'),
        avatarUrl: 'https://i.ibb.co/CzqZ6kG/avatar6.png',
      },
      {
        email: 'zebras@4ever.com',
        userName: 'Zebra Luvver',
        hashedPassword: bcrypt.hashSync('zebrA123!'),
        avatarUrl: 'https://i.ibb.co/MMSJcGn/avatar3.png',
      },
      {
        email: 'rootbeer@floats.com',
        userName: '¡Señor Float!',
        hashedPassword: bcrypt.hashSync('zebrA123!'),
        avatarUrl: 'https://i.ibb.co/r2h1mTQ/avatar4.png',
      },
      {
        email: 'montybiscuit@baseball.com',
        userName: 'Biscuit 교사님',
        hashedPassword: bcrypt.hashSync('Biscuit123!'),
        avatarUrl: 'https://i.ibb.co/kHMKL1Q/avatar1.png',
      },
      {
        email: 'sunny@flower.com',
        userName: 'Ngong Akol',
        hashedPassword: bcrypt.hashSync('sunflowerZ123!'),
        avatarUrl: 'https://i.ibb.co/xLSPhDF/avatar7.png',
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
    return queryInterface.bulkDelete('Users', null, {});
  }
};
