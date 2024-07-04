'use strict';
const bcrypt = require('bcryptjs');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    static async hashPassword(password) {
      return await bcrypt.hash(password, 10);
    }

    async validPassword(password) {
      return await bcrypt.compare(password, this.enc_pass);
    }
  }
  User.init({
    name: DataTypes.STRING,
    is_admin: DataTypes.BOOLEAN,
    enc_pass: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    timestamps: true,
  });
  return User;
};