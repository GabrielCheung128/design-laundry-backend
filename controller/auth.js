const User = require('../db').User;
const Role = require('../db').Role;
const jwt = require('jsonwebtoken');
const createToken = require('../utils/token').createToken;
const sha1 = require('sha1');
const _ = require('lodash');

function removeSensitiveKeys(doc, sensitiveKeys = ['password', 'roleId']) {
    return _.omit(doc.get(), sensitiveKeys);
}

module.exports = class Auth {
    static async login(ctx, next) {
        const { username, password } = ctx.request.body;
        const doc = await User.findOne({ where: { username } });
        if (doc && doc.get('password') ===  sha1(password)) {
            const token = createToken(_.pick(doc.get(), ['uuid', 'firstName', 'lastName']));
            ctx.status = 200;
            ctx.cookies.set({ Authorization: token });
            ctx.body = { token };
        } else {
            ctx.status = 403;
            ctx.body = { error: { info: 'username or password not correct' } };
        }
        next();
    }

    static async register(ctx, next) {
        const body = Object.assign({}, ctx.request.body);
        const doc = await User.findOne({ where: { username: body.username } });
        console.log(doc);
        if (doc) {
            ctx.status = 422;
            ctx.body = { error: { username: 'username already exist' } };
        } else {
            const role = await Role.findOne({ where: { name: 'user' } });
            const user = await User.create(Object.assign({}, body, {
                password: sha1(body.password),
                roleId: role.get('id'),
                status: 1,
            }));
            const token = createToken(_.pick(user.get(), ['uuid', 'firstName', 'lastName']));
            ctx.status = 201;
            ctx.cookies.set({ Authorization: token });
            ctx.body = removeSensitiveKeys(user);
        }
        next();
    }
}