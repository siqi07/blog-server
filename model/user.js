const { DataTypes, Model} = require('sequelize')
const sequelize = require('../config/conn')

class User extends Model {}

User.init({
//定义模型属性
    // 用户名
    userName: {
        type: DataTypes.STRING(20),
        primaryKey: true,
        allowNull: false
    },
    // 密码
    password: {
        type: DataTypes.STRING(20),
    },
    // 昵称
    nickName: {
        type: DataTypes.STRING(20)
    },
    // 简介
    introduce: {
        type: DataTypes.STRING(100)
    }
},{
    sequelize,
    timestamps: false
})

module.exports = User