const UserService = require('../services/UserService');
const AuthService = require('../services/AuthService');

class AuthController {
    constructor(authService, userService) {
        this.authService = authService;
        this.userService = userService;
    }

    async baseAuthorize(req, res, next, isAdmin) {
        try {
            const bearerToken = req.headers.authorization;
            const token = bearerToken.split('Bearer ')[1];
            const decodedUser = this.authService.decodeUserToken(token);
            const user = await this.userService.getById(decodedUser.id);
            if (isAdmin && !user.is_admin) {
                res.status(401).json({
                    message: 'Unauthorized'
                });
                return;
            }
            req.user = user;
            next();
        } catch (err) {
            res.status(500).json({
                message: 'invalid bearer token'
            });
            return;
        }
    };

    async authorizeUser(req, res, next) {
        this.baseAuthorize(req, res, next, false);
    };


    async authorizeAdmin(req, res, next) {
        this.baseAuthorize(req, res, next, true);
    };

    async authorizeOptional(req, res, next) {
        try {
            const bearerToken = req.headers.authorization;
            const token = bearerToken.split('Bearer ')[1];
            const decodedUser = this.authService.decodeUserToken(token);
            const user = await this.userService.getById(decodedUser.id);

            req.user = user;
        } catch (err) {
            req.user = null;
        } finally {
            next();
        }
    };

    async login(req, res) {
        try {
            if (!req.body.name || !req.body.password) {
                res.status(400).json({
                    message: 'missing name or password field'
                });
            } else {
                const name = req.body.name;
                const password = req.body.password;
                const user = await this.userService.getByName(name);

                if (!user) {
                    res.status(404).json({
                        message: 'name is not registered',
                    });
                    return;
                }
                const isPasswordCorrect = await user.validPassword(password);
                if (!isPasswordCorrect) {
                    res.status(401).json({
                        message: 'Wrong password',
                    });
                    return;
                }
                const accessToken =
                    this.authService.createTokenFromUser(user.dataValues);
                res.status(200).json({
                    message: 'login success',
                    data:
                        { accessToken },
                });
            };
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async getSelf(req, res) {
        res.status(200).json(req.user)
    }

    async register(req, res) {
        try {
            if (!req.body.name ||
                !req.body.password
            ) {
                res.status(400).json({
                    message: 'missing name or password field'
                });
            } else {
                const user = await this.userService.getByName(req.body.name);
                if (user) {
                    res.status(409).json({
                        status: 'failed',
                        message: 'name already registered',
                    });
                } else {
                    const encryptPassword = await this.authService.hashPassword(req.body.password);
                    const user = await this.userService.create({
                        name: req.body.name,
                        enc_pass: encryptPassword,
                        is_admin: false,
                    });
                    const accessToken =
                        this.authService.createTokenFromUser(user.dataValues);
                    res.status(201).json({
                        message: 'register success',
                        data:
                            { accessToken },
                    });
                }

            };
        } catch (err) {
            res.status(500).json({
                message: err.message
            });
            return;
        }
    }
}

module.exports = new AuthController(AuthService, UserService);