const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/dl');
const userSchema = require('../schemas/users');

let db = mongoose.connection;
mongoose.Propmise = global.Promise;

db.on('error', () => {
    console.log('error');
});

db.on('open', () => {
    console.log('success');
});

const model = {
    User: mongoose.model('User', mongoose.Schema(userSchema)),
};
module.exports = model;

