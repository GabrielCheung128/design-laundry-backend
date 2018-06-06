const migrate = async (options) => {
    const User = options.User;
    const Role = options.Role;
    Role.sync({ force: true });
    User.sync({ force: true });
    await Role.create({ name: 'Admin', permissions: ['ALL'] });
    await Role.create({ name: 'Holder', permissions: [''] });
    return;
}

module.exports = migrate;