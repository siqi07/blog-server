const Sequelize = require('sequelize')
const config = require('./default')

const sequelize = new Sequelize(config.dataBase.DATABASE, config.dataBase.USERNAME, config.dataBase.PASSWORD,{
        host: config.dataBase.HOST,
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            idle:30000
        }
    }
)

sequelize.authenticate().then(()=>{
    console.log("数据库已连接！")
}).catch(err=>{
    console.log(err)
    console.log("连接失败")
})

module.exports = sequelize