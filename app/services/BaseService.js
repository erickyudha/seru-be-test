class BaseService {
    constructor(repository) {
        this.repository = repository;
    }

    getAll(limit, offset, where) {
        return this.repository.getAll(limit, offset, where);
    }

    getById(id) {
        return this.repository.getById(id);
    }

    create(data) {
        return this.repository.create(data);
    }

    update(id, data) {
        return this.repository.update(id, data);
    }

    delete(id) {
        return this.repository.delete(id);
    }
}

module.exports = BaseService;