const User = require('../../model/user.js')

class userServiice {
    static async findAll(){
        let user = await User.findAll({
            attributes: ['nickName', 'introduce']
        })
        return user
    }
}

module.exports = userServiice