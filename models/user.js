const Sequelize = require('sequelize');

module.exports = (sequelize, options) => (sequelize.define('user', {
    uuid: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastName: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    mobile: {
        type: Sequelize.STRING,
    },
    roleId: {
        type: Sequelize.INTEGER,
        references: {
            model: options.Role,
            key: 'id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
        },
    },
}));