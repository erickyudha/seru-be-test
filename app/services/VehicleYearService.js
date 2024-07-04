const vehicleYearRepository = require('../repositories/VehicleYearRepository');
const BaseService = require('./BaseService')

class VehicleYearService extends BaseService {
  constructor(repository) {
    super(repository)
  }
}

module.exports = new VehicleYearService(vehicleYearRepository);
