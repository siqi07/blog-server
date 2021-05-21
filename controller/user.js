const { listen, request } = require('../app')
const userService = require('../service/api/user')

class userController {
    static async find(ctx) {
        let _data = await userService.findAll()
        ctx.body = {
            'code': 1,
            'status': 200,
            'msg': '获取blog成功',
            'data': _data
        }
    }

    static async update(ctx) {
        let _data = await userService.update(ctx.query)
        ctx.body = {
            'code': 1,
            'status': 200,
            'msg': '获取blog成功',
            'data': _data
        }
    }
}

module.exports = userController