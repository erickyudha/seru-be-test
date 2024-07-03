const BaseController = require('./BaseController');
const VehicleBrandService = require('../services/VehicleBrandService');

class VehicleBrandController extends BaseController {
    constructor(service) {
        this.baseService = service;
    }
}

module.exports = new VehicleBrandController(VehicleBrandService);