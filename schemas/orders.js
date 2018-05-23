const Joi = require('joi');

const base = Joi.object().keys({
    productId: Joi.string().required(),
    price: Joi.number().min(1).max(10000000).required(),
    amount: Joi.number().min(0).max(10000000).required(),
    total: Joi.number().min(0).max(10000000).required(),
});

const db = base.keys({
    orderTime: Joi.date(),
    deliverTime: Joi.date(),
    commitTime: Joi.date(),
});

const router = base.keys({});

module.exports = {
    db,
    router,
};
