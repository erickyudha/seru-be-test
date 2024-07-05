const BaseController = require('./BaseController');
const UserService = require('../services/UserService');
const AuthService = require('../services/AuthService')

class UserController extends BaseController {
    constructor(baseService, authService) {
        super("user", baseService)
        this.service = baseService;
        this.authService = authService;
    };
    async create(req, res) {
        try {
            if (!req.body.name || !req.body.password) {
                res.status(400).json({
                    message: 'Missing name or password field'
                })
                return;
            }
            req.body.enc_pass = await this.authService.hashPassword(req.body.password);
            delete req.body.password;
            const result = await this.service.create(req.body);
            res.status(201).json(result);
        } catch (error) {
            res.status(500).send({
                status: 'error',
                message: error.message
            });
        }
    }

    async update(req, res) {
        try {
            let is_user = false;
            if (!req.user.is_admin) {
                is_user = true;
                if (req.user.id != req.params.id) {
                    res.status(401).json({
                        message: 'Unauthorized. User can only edit self data'
                    })
                    return;
                }
            }
            if (is_user && req.body.id) {
                res.status(401).json({
                    message: 'Unauthorized. User cant edit ID'
                })
                return;
            }
            if (req.body.password) {
                req.body.enc_pass = await this.authService.hashPassword(req.body.password);
                delete req.body.password;
            }
            const updated = await this.service.update(req.params.id, req.body);
            if (updated[0]) {
                res.json({ message: `${this.name} updated successfully` });
            } else {
                res.status(404).send({message: `${this.name} not found`});
            }
        } catch (error) {
            res.status(500).send({
                status: 'error',
                message: error.message
            });
        }
    }
}

module.exports = new UserController(UserService, AuthService);