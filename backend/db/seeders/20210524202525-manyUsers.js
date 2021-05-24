'use strict';

const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'bob@bob.com',
        username: 'Bob the Teacher',
        hashedPassword: bcrypt.hashSync('password'),
        avatarUrl: 'https://ibb.co/QbdV586',
      },
      {
        email: 'june@june.com',
        username: 'Miss June',
        hashedPassword: bcrypt.hashSync('juNe123!'),
        avatarUrl: 'https://ibb.co/zsCgDmS',
      },
      {
        email: 'thedude@dude.com',
        username: 'the Dude',
        hashedPassword: bcrypt.hashSync('duDe123!'),
        avatarUrl: 'https://ibb.co/swYWDJ8',
      },
      {
        email: 'howdy@howdy.com',
        username: 'Thunkmaster Flex',
        hashedPassword: bcrypt.hashSync('duDe123!'),
        avatarUrl: 'https://ibb.co/T139MQx',
      },
      {
        email: 'bigmouth@billy.com',
        username: 'Billy',
        hashedPassword: bcrypt.hashSync('billY123!'),
        avatarUrl: 'https://ibb.co/drSqtdY',
      },
      {
        email: 'zebras@4ever.com',
        username: 'Zebra Luvver',
        hashedPassword: bcrypt.hashSync('zebrA123!'),
        avatarUrl: 'https://ibb.co/r40Xxck',
      },
      {
        email: 'rootbeer@floats.com',
        username: '¡Señor Float!',
        hashedPassword: bcrypt.hashSync('zebrA123!'),
        avatarUrl: 'https://ibb.co/GQDb0Bd',
      },
      {
        email: 'montybiscuit@baseball.com',
        username: 'Biscuit 교사님',
        hashedPassword: bcrypt.hashSync('Biscuit123!'),
        avatarUrl: 'https://ibb.co/3rk1xzB',
      },
      {
        email: 'sunny@flower.com',
        username: 'Ngol Akol',
        hashedPassword: bcrypt.hashSync('sunflowerZ123!'),
        avatarUrl: 'https://ibb.co/LRzbS8N',
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
