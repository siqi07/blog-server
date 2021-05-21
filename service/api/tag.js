const Tag = require('../../model/Tag')

class tagService {
    static async findAll(){
        let tag = await Tag.findAll()
        return tag
    }

    static async findById(data) {
        let tag = await Tag.findByPk(data.tagId)
        return tag
    }

    static async find(data) {
        let tag = await Tag.findAll({
            where: {
                nickName: data.nickName
            }
        })
        return tag
    }

    static async insert(data) {
        let tag = await Tag.create({
            nickName: data.nickName
        })
    }

    static async update(data) {
        let tag = await Tag.findByPk(data.tagId)
        tag.update(data)
        return tag
    }

    static async delete(data) {
        let tag = await Tag.findByPk(data.tagId)
        tag.destroy()
        return tag
    }
}

module.exports = tagService