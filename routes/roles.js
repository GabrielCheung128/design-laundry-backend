const Role = require('../controller/role');
const router = require('koa-router')()
const errorHandle = require('../middlewares/error-handle');
const authMiddleware = require('../middlewares/auth');
const permission = require('../middlewares/permission');
router.prefix('/roles')

router
    .post('/', authMiddleware(permission(errorHandle(Role.create), { entity: 'role', operation: 'create' })))
    .get('/:id', authMiddleware(permission(errorHandle(Role.get), { entity: 'role', operation: 'get' })))
    .get('/', authMiddleware(permission(errorHandle(Role.search), { entity: 'role', operation: 'search' })))
    .put('/:id', authMiddleware(permission(errorHandle(Role.update), { entity: 'role', operation: 'update' })))
    .delete('/:id', authMiddleware(permission(errorHandle(Role.delete), { entity: 'role', operation: 'delete' })))

module.exports = router;
