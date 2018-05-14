const jwt = require('jsonwebtoken');
const crypto = require('crypto');

let secret;
crypto.randomBytes(256, function(err, buf) {
    secret = buf;
});

const createToken = user => {
    return jwt.sign(user, secret, { expiresIn: 3600 });
}

const verifyToken = async token => {
    return await jwt.verify(token, secret);
}

module.exports = {
    createToken,
    verifyToken,
}