const Web = require('../../model/web')

class webService {
    static async findAll(){
        let web = await Web.findAll({
            attributes: ['webTitle', 'title', 'subTitle']
        })
        return web
    }
}

module.exports = webService