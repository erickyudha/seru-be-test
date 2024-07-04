const BaseRepository = require('./BaseRepository');
const models = require('../models');

class VehicleTypeRepository extends BaseRepository {
  constructor(model) {
    super(model)
  }
}

module.exports = new VehicleTypeRepository(models.VehicleType);
