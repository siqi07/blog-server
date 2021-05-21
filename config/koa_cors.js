const cors = async(ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*')

    ctx.set('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, POST, DELETE')

    ctx.set('Access-Control-Allow-Headers', 'x-requested-with, accept, origin, content-type')

    ctx.set('Content-Type', 'application/json; charest=utf-8')

    // ctx.set('Access-Control-Allow-Credentials', true)

    ctx.set('Access-Control-Max-Age', 300)

    await next()
}

module.exports = cors