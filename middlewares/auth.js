const verifyToken = require('../utils/token').verifyToken;

const auth = (event) => async (ctx, next) => {
    try {
        const authorization = ctx.get('Authorization');
        if (!authorization) return ctx.throw(401, 'Invalid Token');
        const token = authorization;
        const user = await verifyToken(token);
        event(ctx, next, { user });
    } catch (err) {
        ctx.throw(401, 'Invalid Token');
    }
}

module.exports = auth;