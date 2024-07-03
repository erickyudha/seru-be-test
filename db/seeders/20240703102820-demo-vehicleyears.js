'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('VehicleYears', [
      { year: 2020, createdAt: new Date(), updatedAt: new Date() },
      { year: 2021, createdAt: new Date(), updatedAt: new Date() },
      { year: 2022, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('VehicleYears', null, {});
  }
};
