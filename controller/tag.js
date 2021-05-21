const { listen, request } = require('../app')
const tagService = require('../service/api/tag')

class tagController {
    static async findAll(ctx) {
        let _data = await tagService.findAll()
        ctx.body = {
            'code': 1,
            'status': 200,
            'msg': '获取blog成功',
            'data': _data
        }
    }
    static async findOne(ctx) {
        let _data = await tagService.find(ctx.query)
        ctx.body = {
            'code': 1,
            'status': 200,
            'msg': '获取blog成功',
            'data': _data
        }
    }
    static async insert(ctx) {
        let _data = await tagService.insert(ctx.query)
        ctx.body = {
            'code': 1,
            'status': 200,
            'msg': '获取blog成功',
            'data': _data
        }
    }

    static async update(ctx) {
        let _data = await tagService.update(ctx.query)
        ctx.body = {
            'code': 1,
            'status': 200,
            'msg': '获取blog成功',
            'data': _data
        }
    }

    static async delete(ctx) {
        let _data = await tagService.delete(ctx.query)
        ctx.body = {
            'code': 1,
            'status': 200,
            'msg': '获取blog成功',
            'data': _data
        }
    }
}

module.exports = tagController