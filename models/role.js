const Sequelize = require('sequelize');

module.exports = (sequelize, options) => (sequelize.define('role', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    permissions: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
    },
}));