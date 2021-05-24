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
        avatarUrl: 'https://ibb.co/QbdV586',
      },
      {
        email: 'june@june.com',
        userName: 'Miss June',
        hashedPassword: bcrypt.hashSync('juNe123!'),
        avatarUrl: 'https://ibb.co/zsCgDmS',
      },
      {
        email: 'thedude@dude.com',
        userName: 'the Dude',
        hashedPassword: bcrypt.hashSync('duDe123!'),
        avatarUrl: 'https://ibb.co/swYWDJ8',
      },
      {
        email: 'howdy@howdy.com',
        userName: 'Thunkmaster Flex',
        hashedPassword: bcrypt.hashSync('duDe123!'),
        avatarUrl: 'https://ibb.co/T139MQx',
      },
      {
        email: 'bigmouth@billy.com',
        userName: 'Billy',
        hashedPassword: bcrypt.hashSync('billY123!'),
        avatarUrl: 'https://ibb.co/drSqtdY',
      },
      {
        email: 'zebras@4ever.com',
        userName: 'Zebra Luvver',
        hashedPassword: bcrypt.hashSync('zebrA123!'),
        avatarUrl: 'https://ibb.co/r40Xxck',
      },
      {
        email: 'rootbeer@floats.com',
        userName: '¡Señor Float!',
        hashedPassword: bcrypt.hashSync('zebrA123!'),
        avatarUrl: 'https://ibb.co/GQDb0Bd',
      },
      {
        email: 'montybiscuit@baseball.com',
        userName: 'Biscuit 교사님',
        hashedPassword: bcrypt.hashSync('Biscuit123!'),
        avatarUrl: 'https://ibb.co/3rk1xzB',
      },
      {
        email: 'sunny@flower.com',
        userName: 'Ngong Akol',
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
