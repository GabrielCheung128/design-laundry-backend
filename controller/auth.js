const User = require('../db').User;
const jwt = require('jsonwebtoken');
const createToken = require('../utils/token').createToken;

module.exports = class Auth {
    static async login(ctx, next) {
        const { username, password } = ctx.request.body;
        const doc = await User.findOne({ where: { username } });
        if (doc && doc.get('password') ===  sha1(password)) {
            const token = createToken(_.pick(doc.get(), ['uuid', 'firstName', 'lastName']));
            ctx.status = 200;
            ctx.cookies.set({ Authorization: token });
        } else {
            ctx.status = 403;
            ctx.body = { error: { info: 'username or password not correct' } };
        }
        next();
    }
}