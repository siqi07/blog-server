const router = require('koa-router')()
// const controller = require('../controller')

router.prefix('/api')

router.get('/', async (ctx, next) => {
  ctx.body = 'api'
})
// router.get('/find', controller.find)

// router.post('/insert', controller.insert)

// router.delete('/delete', controller.del)

// router.put('/put', controller.update)


// router.get('/string', async (ctx, next) => {
//   ctx.body = 'koa2 string'
// })

// router.get('/json', async (ctx, next) => {
//   ctx.body = {
//     title: 'koa2 json'
//   }
// })

module.exports = router
