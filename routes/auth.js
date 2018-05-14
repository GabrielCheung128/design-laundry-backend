const Auth = require('../controller/auth');
const router = require('koa-router')()
const errorHandle = require('../middlewares/error-handle');

router.prefix('/auth')

router.post('/', errorHandle(Auth.login));

module.exports = router;
