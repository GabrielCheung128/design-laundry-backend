const db = require('../db');
const Role = db.Role;
const User = db.User;

const getPermission = (callback, { entity, operation }) => async (ctx, next, options) => {
    const user = User.findById(options.user.uuid);
    const role = Role.findById(user.get('roleId'));
    const permissions = role.get('permissions');
    const permission = `${entity}_${operation}`.toUpperCase();
    if((permissins.indexOf(permission) !== -1) || permissions[0] === 'ALL') return callback(ctx, next, { user, role });
    ctx.throw(403, 'Unauthorized');
}

module.exports = getPermission;