const Joi = require('joi');

const base = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(30).required(),
    firstName: Joi.string().alphanum().min(3).max(30).required(),
    lastName: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().required(),
    mobile: Joi.string(),
    address: Joi.string(),
    role: Joi.number().required().error(new Error('Role is not valid')),
    status: Joi.string().required(),
    token: Joi.string(),
});

const db = base.keys({
    password: Joi.string().required().error(() => 'Password is not valid'),
    createTime: Joi.date().required(),
    updateTime: Joi.date(),
});

const router = base.keys({
    password: Joi.string().regex(/^[a-zA-Z0-9]{6,30}$/).required().error(() => 'Password is not valid'),
});

module.exports = {
    db,
    router,
};
