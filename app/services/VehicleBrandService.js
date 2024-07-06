const BaseService = require('./BaseService')
const VehicleBrandRepository = require('../repositories/VehicleBrandRepository');

class VehicleBrandService extends BaseService {
  constructor(repository) {
    super(repository)
  }
}

module.exports = new VehicleBrandService(VehicleBrandRepository);
