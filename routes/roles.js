const Role = require('../controller/role');
const router = require('koa-router')()
const errorHandle = require('../middlewares/error-handle');

router.prefix('/roles')

router
    .post('/', errorHandle(Role.create))
    .get('/:id', errorHandle(Role.get))
    .get('/', errorHandle(Role.search))
    .put('/:id', errorHandle(Role.update))
    .delete('/:id', errorHandle(Role.delete));

module.exports = router;
