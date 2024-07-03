const {BaseRepository} = require('./BaseRepository');
const { VehicleModel } = require('../models');

class VehicleModelRepository extends BaseRepository {
  constructor(model) {
    super(model)
  }
}

module.exports = new VehicleModelRepository(VehicleModel);
