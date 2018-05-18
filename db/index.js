const Mongoose = require('Mongoose');
Mongoose.connect('mongodb://localhost:27017/dl');
const Joigoose = require('joigoose')(Mongoose);
const userSchema = require('../schemas/users');
const roleSchema = require('../schemas/roles');
const orderSchema = require('../schemas/orders');

let db = Mongoose.connection;
Mongoose.Propmise = global.Promise;

db.on('error', () => {
    console.log('error');
});

db.on('open', () => {
    console.log('success');
});

const model = {
    User: Mongoose.model('User', new Mongoose.Schema(Joigoose.convert(userSchema.db))),
    Role: Mongoose.model('Role', new Mongoose.Schema(Joigoose.convert(roleSchema.db))),
    Order: Mongoose.model('Order', new Mongoose.Schema(Joigoose.convert(orderSchema.db))),
};
module.exports = model;

