const Sequelize = require('sequelize');
const roleDefine = require('../models/role');
const userDefine = require('../models/user');

const sequelize = new Sequelize('postgresql://localhost');

const Role = roleDefine(sequelize, {});
const User = userDefine(sequelize, { Role });

Role.sync();
User.sync();

module.exports = {
    Role,
    User,
}