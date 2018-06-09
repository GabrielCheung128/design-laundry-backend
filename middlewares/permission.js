const db = require('../db');
const Role = db.Role;
const User = db.User;

const getPermission = (callback, opt) => async (ctx, next, options) => {
    const user = await User.findById(options.user.uuid);
    const role = await Role.findById(user.get('roleId'));
    const permissions = role.get('permissions');
    const permission = `${opt.entity}_${opt.operation}`.toUpperCase();
    if((permissins.indexOf(permission) !== -1) || permissions[0] === 'ALL') return await callback(ctx, next, { user, role });
    ctx.throw(403, 'Unauthorized');
}

module.exports = getPermission;