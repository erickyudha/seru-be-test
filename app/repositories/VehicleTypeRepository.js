const {BaseRepository} = require('./BaseRepository');
const { VehicleType } = require('../models');

class VehicleTypeRepository extends BaseRepository {
  constructor(model) {
    super(model)
  }
}

module.exports = new VehicleTypeRepository(VehicleType);
