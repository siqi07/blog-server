const { listen, request } = require('../app')
const blogService = require('../service/api/blog')

class blogController {
    static async findAll(ctx) {
        let _data = await blogService.findAll()
        ctx.body = {
            'code': 1,
            'status': 200,
            'msg': '获取blog成功',
            'data': _data
        }
    }
    
    static async findOne(ctx) {
        let _data = await blogService.findById(ctx.query)
        ctx.body = {
            'code': 1,
            'status': 200,
            'msg': '获取blog成功',
            'data': _data
        }
    }

    static async countAll(ctx) {
        let _data = await blogService.countAll()
        ctx.body = {
            'code': 1,
            'status': 200,
            'msg': '获取blog成功',
            'data': _data
        }
    }

    static async catalog(ctx) {
        let _data = await blogService.catalog()
        ctx.body = {
            'code': 1,
            'status': 200,
            'msg': '获取blog成功',
            'data': _data
        } 
    }

    static async insert(ctx) {
        let _data = await blogService.insert(ctx.query)
        ctx.body = {
            'code': 1,
            'status': 200,
            'msg': '获取blog成功',
            'data': _data
        }
    }

    static async update(ctx) {
        let _data = await blogService.update(ctx.query)
        ctx.body = {
            'code': 1,
            'status': 200,
            'msg': '获取blog成功',
            'data': _data
        }
    }

    static async delete(ctx) {
        let _data = await blogService.delete(ctx.query)
        ctx.body = {
            'code': 1,
            'status': 200,
            'msg': '获取blog成功',
            'data': _data
        }
    }

    static async test(ctx) {
        let _data = await blogService.test(ctx.query)
        ctx.body = {
            'code': 1,
            'status': 200,
            'msg': '获取blog成功',
            'data': _data
        }
    }
}

module.exports = blogController