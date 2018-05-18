const Joi = require('joi');

const base = Joi.object().keys({
    name: Joi.string().min(3).max(20).required(),
    user: Joi.object().keys({
        create: Joi.boolean(),
        update: Joi.boolean(),
        delete: Joi.boolean(),
        edit: Joi.boolean(),
    }),
    status: Joi.string().required(),
});

const db = base.keys({
    createTime: Joi.date().required(),
    updateTime: Joi.date(),
});

const router = base.keys({});

module.exports = {
    db,
    router,
};
