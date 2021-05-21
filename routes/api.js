const router = require('koa-router')()
// const service = require('../service/api/blog')
// const test = require('../config/test')
const blogController = require('../controller/blog')
const tagController = require('../controller/tag')
const userController = require('../controller/user')
const webController = require('../controller/web')

router.prefix('/api')

// router.get('/', async (ctx, next) => {
//   ctx.body = 'api'
// })


// //blogapi
router.get('/blog/findall', blogController.findAll)    //获取博客内容
router.get('/blog/find', blogController.findOne)
router.get('/blog/countall', blogController.countAll)
router.get('/blog/catalog', blogController.catalog)

router.post('/blog/insert', blogController.insert)    //添加博客

router.delete('/blog/delete', blogController.delete)    //删除博客

router.put('/blog/put', blogController.update)      //更改博客

router.get('/blog/test', blogController.test)
//tagapi
router.get('/tag/findAll', tagController.findAll)   //查找所有标签
router.get('/tag/findOne', tagController.findOne)     //查找一个标签

router.post('/tag/insert', tagController.insert)    //添加一个标签

router.post('/tag/delete', tagController.delete)     //删除标签

router.put('/tag/put', tagController.update)      //更新标签

//userapi
router.get('/user/find', userController.find)   //查找用户

router.put('/user/put', userController.update)      //更新标签

//webapi
router.get('/web/find', webController.find)         //查找网站信息

router.put('/web/put', webController.update)      //更新网站信息


// router.get('/string', async (ctx, next) => {
//   ctx.body = 'koa2 string'
// })

// router.get('/json', async (ctx, next) => {
//   ctx.body = {
//     title: 'koa2 json'
//   }
// })

module.exports = router
