const router = require('koa-router')();
const doc = require('../docs/doc');

// router.get('/', async (ctx, next) => {
//   await ctx.render('index', {
//     title: 'Hello Koa 2!'
//   })
// })

// router.get('/string', async (ctx, next) => {
//   ctx.body = 'koa2 string'
// })

router.get('/doc-json', async (ctx, next) => {
  ctx.body = doc;
})

module.exports = router
