'use strict';

/** @type {import('sequelize-cli').Migration} */

const bcrypt = require('bcryptjs');
const account = require('../../config/account');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      { name: account.default_admmin_name, is_admin: true, enc_pass: bcrypt.hashSync(account.default_admin_pass), createdAt: new Date(), updatedAt: new Date() },
      { name: account.default_user_name, is_admin: false, enc_pass: bcrypt.hashSync(account.default_user_pass), createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
