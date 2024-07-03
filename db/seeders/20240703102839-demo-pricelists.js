'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const vehicleYears = await queryInterface.sequelize.query(
      `SELECT id FROM "VehicleYears";`
    );
    const vehicleYearRows = vehicleYears[0];

    const vehicleModels = await queryInterface.sequelize.query(
      `SELECT id FROM "VehicleModels";`
    );
    const vehicleModelRows = vehicleModels[0];

    await queryInterface.bulkInsert('Pricelists', [
      { code: 'C2020', price: 30000, year_id: vehicleYearRows[0].id, model_id: vehicleModelRows[0].id, createdAt: new Date(), updatedAt: new Date() },
      { code: 'C2021', price: 31000, year_id: vehicleYearRows[1].id, model_id: vehicleModelRows[1].id, createdAt: new Date(), updatedAt: new Date() },
      { code: 'R2022', price: 35000, year_id: vehicleYearRows[2].id, model_id: vehicleModelRows[2].id, createdAt: new Date(), updatedAt: new Date() },
      { code: 'CRV2020', price: 32000, year_id: vehicleYearRows[0].id, model_id: vehicleModelRows[3].id, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Pricelists', null, {});
  }
};
