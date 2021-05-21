const router = require('koa-router')()
// const service = require('../service/api/blog')
// const test = require('../config/test')
const controller = require('../controller/blog')

router.prefix('/api')

// router.get('/', async (ctx, next) => {
//   ctx.body = 'api'
// })

// router.get('/',  test)
// //blogapi
router.get('/findall', controller.findAll)    //获取博客内容
router.get('/find',controller.findOne)


router.post('/insert', controller.insert)    //添加博客

router.delete('/delete', controller.delete)    //删除博客

router.put('/put', controller.update)      //更改博客

//userapi
// router.get('')

//

// router.get('/string', async (ctx, next) => {
//   ctx.body = 'koa2 string'
// })

// router.get('/json', async (ctx, next) => {
//   ctx.body = {
//     title: 'koa2 json'
//   }
// })

module.exports = router
