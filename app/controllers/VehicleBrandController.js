const BaseController = require('./BaseController');
const VehicleBrandService = require('../services/VehicleBrandService');

class VehicleBrandController extends BaseController {
    constructor(service) {
        super('vehicle brand', service)
    }
}

module.exports = new VehicleBrandController(VehicleBrandService);