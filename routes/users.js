const User = require('../controller/user');
const router = require('koa-router')()
const errorHandle = require('../middlewares/error-handle');
const authMiddleware = require('../middlewares/auth');
const permission = require('../middlewares/permission');
router.prefix('/users')

router
    .post('/', authMiddleware(permission(errorHandle(User.create), { entity: 'user', operation: 'create' })))
    .get('/:id', authMiddleware(permission(errorHandle(User.get), { entity: 'user', operation: 'get' })))
    .get('/', authMiddleware(permission(errorHandle(User.search), { entity: 'user', operation: 'search' })))
    .put('/:id', authMiddleware(permission(errorHandle(User.update), { entity: 'user', operation: 'update' })))
    .delete('/:id', authMiddleware(permission(errorHandle(User.delete), { entity: 'user', operation: 'delete' })));

module.exports = router;
