const BaseController = require('./BaseController');
const VehicleTypeService = require('../services/VehicleTypeService');

class VehicleTypeController extends BaseController {
    constructor(service) {
        this.baseService = service;
    }
}

module.exports = new VehicleTypeController(VehicleTypeService);