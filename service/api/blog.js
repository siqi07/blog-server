const Blog = require('../../model/blog.js')
const Tag = require('../../model/tag');

class blogServiice {
    static async findAll(){
        let blog = await Blog.findAll();
        for (let iterator of blog) {
            // console.log(iterator.blogId)
            let tag = await Tag.findAll({
                attributes: ['tagId','tagName'],
                where: {
                    blogId: iterator.blogId
                }
            })
            iterator.setDataValue('tags',tag)
        }
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

    static async countAll(){
        let { count, rows } = await Blog.findAndCountAll()
        // console.log(count)
        return count 
    }

    static async catalog() {
        let blog = await Blog.findAll({
            attributes: ['blogTitle', 'uploadTime','blogId'],
            order: [
                ['upLoadTime', 'DESC']
            ]
        })
        const catalog = []
        var lastyear = null;
        var lastmonth = null;
        const months = []
        var year = {}
        var month = {}
        for (let iterator of blog) {
            // console.log(lastmonth)
            let str = iterator.uploadTime.split('-')
            // console.log(str)
            iterator.setDataValue('year', str[0])
            iterator.setDataValue('month', str[1])
            iterator.setDataValue('day', str[2])
            if(lastyear == null){    //第一个
                lastyear = str[0]
                year = {
                    yearId: str[0]
                }
                lastmonth = str[1]
                blog = {
                    blogId: iterator.blogId,
                    blogTitle: iterator.blogTitle
                }
                month = {
                    monthId: str[1],
                    blog: [blog]
                }
            }else if(lastyear != str[0]){     //和上一个不同
                lastyear = str[0]
                year.months = months
                catalog.push(year)
                year = {
                    yearId: str[0]
                }
            }else{                       //同一年
                if(lastmonth == null){
                    lastmonth = str[1]
                    month = {
                        monthId: str[1],
                        blogTitle: [iterator.blogTitle]
                    }
                }else if(lastmonth != str[1]){
                    lastmonth = str[1]
                    months.push(month)
                    blog = {
                        blogId: iterator.blogId,
                        blogTitle: iterator.blogTitle
                    }
                    month = {
                        monthId: str[1],
                        blog: [blog]
                    }
                }else{
                    blog = {
                        blogId: iterator.blogId,
                        blogTitle: iterator.blogTitle
                    }
                    month.blog.push(blog)
                }
            }
        }
        months.push(month)
        year.months = months
        catalog.push(year)
        return catalog
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

    static async test(data){
        let blog = await Blog.findAll({
            // group: 'blogId',
            where: {
                blogId: data.blogId
            },
            // include: [{
            //     model: Tag,
            //     attributes: ['tagName']
            // }],
            // raw: true
        })
        let tag = await Tag.findAll({
            attributes: ['tagId','tagName'],
            where: {
                BlogId: data.blogId
            }
        })
        // blog[0].tag=tag
        for (const key of blog) {
            console.log(key)
            key.setDataValue('tags',tag)
            return key
        }
        // console.log(blog)
        // console.log(tag)
        // map.put(blogId,blog)
        return blog
    }
    
}

module.exports = blogServiice