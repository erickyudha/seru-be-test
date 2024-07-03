'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const vehicleTypes = await queryInterface.sequelize.query(
      `SELECT id FROM "VehicleTypes";`
    );
    const vehicleTypeRows = vehicleTypes[0];

    await queryInterface.bulkInsert('VehicleModels', [
      { name: 'Camry', type_id: vehicleTypeRows[0].id, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Corolla', type_id: vehicleTypeRows[0].id, createdAt: new Date(), updatedAt: new Date() },
      { name: 'RAV4', type_id: vehicleTypeRows[1].id, createdAt: new Date(), updatedAt: new Date() },
      { name: 'CR-V', type_id: vehicleTypeRows[1].id, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Accord', type_id: vehicleTypeRows[0].id, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Civic', type_id: vehicleTypeRows[0].id, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Pilot', type_id: vehicleTypeRows[1].id, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Highlander', type_id: vehicleTypeRows[1].id, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Land Cruiser', type_id: vehicleTypeRows[1].id, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Yaris', type_id: vehicleTypeRows[0].id, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Venza', type_id: vehicleTypeRows[1].id, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Fit', type_id: vehicleTypeRows[0].id, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Odyssey', type_id: vehicleTypeRows[1].id, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Ridgeline', type_id: vehicleTypeRows[1].id, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Tacoma', type_id: vehicleTypeRows[1].id, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Avalon', type_id: vehicleTypeRows[0].id, createdAt: new Date(), updatedAt: new Date() },
      { name: '4Runner', type_id: vehicleTypeRows[1].id, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Sequoia', type_id: vehicleTypeRows[1].id, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Supra', type_id: vehicleTypeRows[0].id, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Sienna', type_id: vehicleTypeRows[1].id, createdAt: new Date(), updatedAt: new Date() },
      { name: 'HR-V', type_id: vehicleTypeRows[1].id, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Passport', type_id: vehicleTypeRows[1].id, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('VehicleModels', null, {});
  }
};