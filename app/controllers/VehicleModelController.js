const BaseController = require('./BaseController');
const VehicleModelService = require('../services/VehicleModelService');

class VehicleModelController extends BaseController {
    constructor(service) {
        this.baseService = service;
    }
}

module.exports = new VehicleModelController(VehicleModelService);