const BaseController = require('./BaseController');
const UserService = require('../services/UserService');

class UserController extends BaseController {
    constructor(service) {
        this.baseService = service;
    }
}

module.exports = new UserController(UserService);