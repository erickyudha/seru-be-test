const BaseRepository = require('./BaseRepository');
const models = require('../models');

class VehicleYearRepository extends BaseRepository {
  constructor(model) {
    super(model)
  }
}

module.exports = new VehicleYearRepository(models.VehicleYear);
