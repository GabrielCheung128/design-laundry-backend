const db = require('../db');
const Role = db.Role;
const sha1 = require('sha1');
const createToken = require('../utils/token').createToken;
const parse = require('querystring').parse;
const _ = require('lodash');

module.exports = class RoleController {
    static async create(ctx, next) {
        const role = await Role.create(ctx.request.body);
        ctx.status = 201;
        ctx.body = role.get();
        next();
    }

    static async get(ctx, next) {
        const doc = await Role.findById(ctx.params.id);
        if (doc) {
            ctx.status = 200;
            ctx.body = doc.get();
        } else {
            ctx.status = 404;
        }
        next();
    }

    static async update(ctx, next) {
        const doc = await  Role.findById(ctx.params.id);
        if (doc) {
            await doc.update(ctx.request.body);
            ctx.body = doc.get();
            ctx.status = 200;
        }
        next();
    }

    static async search(ctx, next) {
        const doc = await Role.findAll({ where: parse(ctx.querystring) });
        ctx.status = 200;
        ctx.body = doc;
        next(ctx);
    }

    static async delete(ctx, next) {
        const id = ctx.params.id;
        await Role.destroy({ where: { id: id } });
        ctx.status = 200;
        next();
    }
}