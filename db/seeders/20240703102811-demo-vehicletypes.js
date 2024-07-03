'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const vehicleBrands = await queryInterface.sequelize.query(
      `SELECT id FROM "VehicleBrands";`
    );
    const vehicleBrandRows = vehicleBrands[0];

    await queryInterface.bulkInsert('VehicleTypes', [
      { name: 'Sedan', brand_id: vehicleBrandRows[0].id, createdAt: new Date(), updatedAt: new Date() },
      { name: 'SUV', brand_id: vehicleBrandRows[1].id, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('VehicleTypes', null, {});
  }
};
