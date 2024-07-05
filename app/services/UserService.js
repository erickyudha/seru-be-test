const BaseService = require('./BaseService')
const UserRepository = require('../repositories/UserRepository')

class UserService extends BaseService {
  constructor(repository) {
    super(repository)
    this.repository = repository;
  }

  getByName(name) {
    return this.repository.getByName(name);
  }
}

module.exports = new UserService(UserRepository);
