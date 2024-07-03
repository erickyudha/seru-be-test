class BaseController {
    constructor(name, baseService) {
        this.name = name;
        this.baseService = baseService;
    }

    async getAll(req, res) {
        const { limit, offset } = req.query;
        const where = req.body;
        try {
            const result = await this.baseService.getAll(Number(limit), Number(offset), where);
            res.json({
                data: result,
                metadata: {
                    total: 99,
                    limit,
                    offset
                }
            });
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    async getById(req, res) {
        try {
            const result = await this.baseService.getById(req.params.id);
            if (result) {
                res.json(result);
            } else {
                res.status(404).send(`${this.name} not found`);
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    async create(req, res) {
        try {
            const result = await this.baseService.create(req.body);
            res.status(201).json(result);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    async update(req, res) {
        try {
            const updated = await this.baseService.update(req.params.id, req.body);
            if (updated[0]) {
                res.json({ message: `${this.name} updated successfully` });
            } else {
                res.status(404).send(`${this.name} not found`);
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    async delete(req, res) {
        try {
            const deleted = await this.baseService.delete(req.params.id);
            if (deleted) {
                res.json({ message: `${this.name} deleted successfully` });
            } else {
                res.status(404).send(`${this.name} not found`);
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}

module.exports = BaseController;