const { DataTypes, Model} = require('sequelize')
const sequelize = require('../config/conn')
const Tag = require('./tag')

class Blog extends Model {}

Blog.init({
//定义模型属性
    // 博客标题
    blogTitle: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    // 博客id
    blogId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    // 上传时间
    uploadTime: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        // get() {
        //     const rawValue = this.getDataValue('uploadTime')
        // }
    },
    // 子标题
    subTitle: {
        type: DataTypes.STRING(50)
    },
    // 修改日期
    modificationTime: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    // 摘要
    abstract: {
        type: DataTypes.STRING(200),
    }
},{
    sequelize,
    timestamps: false
})
Blog.hasMany(Tag, { foreignKey: 'blogId' })
module.exports = Blog