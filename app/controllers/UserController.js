const BaseController = require('./BaseController');
const UserService = require('../services/UserService');

class UserController extends BaseController {
    constructor(baseService) {
        super("user", baseService)
    };
}

module.exports = new UserController(UserService);