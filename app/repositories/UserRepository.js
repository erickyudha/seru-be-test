const models = require('../models');
const BaseRepository = require('./BaseRepository');

class UserRepository extends BaseRepository {
    constructor(model) {
        super(model)
        this.model = model
    }

    getAll(limit, offset, where) {
        return this.model.findAndCountAll({ limit, offset, where, attributes: {exclude: ['enc_pass']} });
    }

    getById(id) {
        return this.model.findByPk(id, {attributes: {exclude: ['enc_pass']}});
    }

    getByName(name) {
        return this.model.findOne({where: {name}});
    }
}

module.exports = new UserRepository(models.User);
