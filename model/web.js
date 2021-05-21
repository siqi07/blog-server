const { DataTypes, Model} = require('sequelize')
const sequelize = require('../config/conn')

class Web extends Model {}

Web.init({
//定义模型属性
    // 网站名称
    webTitle: {                        
        type: DataTypes.STRING(50),
    },
    // 标题
    title: {
        type: DataTypes.STRING(50)        
    },
    // 子标题
    subTitle: {
        type: DataTypes.STRING(50)
    },
},{
    sequelize,
    timestamps: false
})

module.exports = Web