const { listen, request } = require('../app')
const webService = require('../service/api/web')

class webController {
    static async find(ctx) {
        let _data = await webService.findAll()
        ctx.body = {
            'code': 1,
            'status': 200,
            'msg': '获取blog成功',
            'data': _data
        }
    }

    static async update(ctx) {
        let _data = await webService.update(ctx.query)
        ctx.body = {
            'code': 1,
            'status': 200,
            'msg': '获取blog成功',
            'data': _data
        }
    }


}

module.exports = webController