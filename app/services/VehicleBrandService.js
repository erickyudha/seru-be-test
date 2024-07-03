const vehicleBrandRepository = require('../repositories/vehicleBrandRepository');
const {BaseService} = require('./BaseService')

class VehicleBrandService extends BaseService {
  constructor(repository) {
    super(repository)
  }
}

module.exports = new VehicleBrandService(vehicleBrandRepository);
