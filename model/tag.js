const { DataTypes, Model} = require('sequelize')
const sequelize = require('../config/conn')

class Tag extends Model {}

Tag.init({
//定义模型属性
    // 博客id
    blogId: {
        type: DataTypes.INTEGER
    },
    // 标签id
    tagId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    // 标签名
    tagName: {
        type: DataTypes.STRING(20)
    }
},{
    sequelize,
    timestamps: false
})

module.exports = Tag