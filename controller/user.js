const db = require('../db');
const User = db.User;
const moment = require('moment');
const objectIdToTimestamp = require('objectid-to-timestamp');
const sha1 = require('sha1');
const createToken = require('../utils/token').createToken;
const parse = require('querystring').parse;
const _ = require('lodash');

function removeSensitiveKeys(doc, sensitiveKeys = ['password']) {
    return _.omit(doc.get(), sensitiveKeys);
}

function allowSearch(querystring, keys) {
    return _.pick(parse(querystring), keys);
}

module.exports = class UserController {
    static async create(ctx, next) {
        const body = Object.assign({}, ctx.request.body);
        const password = body.password;
        const doc = await User.findOne({ where: { username: body.username } });
        if (doc) {
            ctx.status = 422;
            ctx.body = { error: { username: 'username already exist' } };
        } else {
            const user = await User.create(Object.assign({}, body, {
                password: sha1(password),
            }));
            const token = createToken(_.pick(user.get(), ['uuid', 'firstName', 'lastName']));
            ctx.status = 201;
            ctx.cookies.set({ Authorization: token });
            ctx.body = removeSensitiveKeys(user);
        }
        next();
    }

    static async get(ctx, next) {
        const doc = await User.findById(ctx.params.id);
        if (doc) {
            ctx.status = 200;
            ctx.body = removeSensitiveKeys(doc);
        } else {
            ctx.status = 404;
        }
        next();
    }

    static async update(ctx, next) {
        const doc = await User.findById(ctx.params.id);
        if (doc) {
            await doc.update(_.omit(ctx.request.body, ['username', 'roleId']));
            ctx.status = 200;
            ctx.body = removeSensitiveKeys(doc);
        }
        next();
    }

    static async search(ctx, next) {
        const doc = await User.findAll({ where: allowSearch(ctx.querystring, ['username']) });
        ctx.status = 200;
        ctx.body = doc.map(user => removeSensitiveKeys(user));
        next();
    }

    static async delete(ctx, next) {
        const id = ctx.params.id;
        await User.destroy({ where: { uuid: id }});
        ctx.status = 200;
        next();
    }
}