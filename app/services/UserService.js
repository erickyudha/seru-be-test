const BaseService = require('./BaseService')
const UserRepository = require('../repositories/UserRepository')

class UserService extends BaseService {
  constructor(repository) {
    super(repository)
  }
}

module.exports = new UserService(UserRepository);
