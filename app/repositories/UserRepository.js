const { User } = require('../models');
const {BaseRepository} = require('./BaseRepository');

class UserRepository extends BaseRepository {
    constructor(model) {
        super(model)
    }
}

module.exports = new UserRepository(User);
