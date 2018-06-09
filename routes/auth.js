const Auth = require('../controller/auth');
const router = require('koa-router')()
const errorHandle = require('../middlewares/error-handle');

router.prefix('/auth')

router.post('/login', errorHandle(Auth.login));
router.post('/register', errorHandle(Auth.register));

module.exports = router;
