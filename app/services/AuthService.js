const jwt = require('jsonwebtoken');
const { JWT_SIGNATURE_KEY } = require('../../config/application');
const UserRepository = require('../repositories/UserRepository')
const models = require('../models');

class AuthService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    createTokenFromUser(user) {
        return jwt.sign(user, JWT_SIGNATURE_KEY);
    }

    decodeUserToken(token) {
        return jwt.verify(token, JWT_SIGNATURE_KEY);
    }

    hashPassword(password) {
        return models.User.hashPassword(password);
    }
}

module.exports = new AuthService(UserRepository)