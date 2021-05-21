const Blog = require('../../model/blog.js')

class blogServiice {
    static async findAll(){
        let blog = await Blog.findAll();
        return blog
    }

    static async findById(data){
        let blog = await Blog.findByPk(data.blogId)
        return blog
    }

    static async find(data){
        let blog = await Blog.findAll({
            where: {
                blogTitle: data.blogTitle
            }
        })
        return blog
    }

    static async insert(data){
        let blog = await Blog.create({
            blogTitle: data.blogTitle
        })
        return blog
    }

    static async update(data){
        let blog = await Blog.findByPk(data.blogId)
        blog.update(data)
        return blog
    }

    static async delete(data){
        let blog = await Blog.findByPk(data.blogId)
        blog.destroy()
        return blog
    }
}

module.exports = blogServiice