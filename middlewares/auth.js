const verifyToken = require('../utils/token').verifyToken;

const auth = (event) => async (ctx, next) => {
    const authorization = ctx.get('Authorization');
    let user;
    !authorization && ctx.throw(401, 'no token detected in http headerAuthorization');
    const token = authorization.split(' ')[1];
    try {
        user = await verifyToken(token);
    } catch (err) {
        ctx.throw(401, 'invalid token');
    }
    event(ctx, next, user);
}