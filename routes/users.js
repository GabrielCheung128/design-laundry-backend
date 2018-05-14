const User = require('../controller/user');
const router = require('koa-router')()
const errorHandle = require('../middlewares/error-handle');

router.prefix('/users')

router
    .post('/', errorHandle(User.create))
    .get('/:id', errorHandle(User.get))
    .get('/', errorHandle(User.search))
    .put('/:id', errorHandle(User.update))
    .delete('/:id', errorHandle(User.delete));

module.exports = router;
