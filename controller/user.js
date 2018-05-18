const db = require('../db');
const User = db.User;
const moment = require('moment');
const objectIdToTimestamp = require('objectid-to-timestamp');
const sha1 = require('sha1');
const createToken = require('../utils/token').createToken;
const parse = require('querystring').parse;
const _ = require('lodash');

module.exports = class UserController {
    static async create(ctx, next) {
        const body = Object.assign({}, ctx.request.body);
        const password = body.password;
        const doc = await User.findOne({ username: body.username });
        if (doc) {
            ctx.status = 422;
            ctx.body = { error: { username: 'username already exist' } };
        } else {
            const token = createToken(body);
            const user = new User(Object.assign({}, body, {
                password: sha1(password),
            }));
            user.createTime = moment(objectIdToTimestamp(user._id)).format('YYYY-MM-DD HH:mm:ss');
            await user.save();
            ctx.status = 201;
            ctx.cookies.set('token', token);
            ctx.body = { username };
        }
        next();
    }

    static async get(ctx, next) {
        const doc = await User.find({ _id: ctx.params.id });
        if (doc) {
            ctx.status = 200;
            ctx.body = doc;
        } else {
            ctx.status = 404;
        }
        next();
    }

    static async update(ctx, next) {
        const doc = await  User.findOne({ _id: ctx.params.id });
        if (doc) {
            Object.assign(doc, ctx.request.body);
            await doc.save();
        }
        next();
    }

    static async search(ctx, next) {
        const doc = await User.find(parse(ctx.querystring));
        ctx.status = 200;
        ctx.body = doc;
        next();
    }

    static async delete(ctx, next) {
        const id = ctx.params.id;
        await User.findOneAndRemove({ _id: id });
        ctx.status = 200;
        next();
    }
}