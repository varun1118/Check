const Sequlize=require('sequelize')

const db =  new Sequlize()

const Tasks=db.define('task',{
    id:{
        type: Sequlize.DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:Sequlize.DataTypes.STRING(30),
        allowNull:false,
    }
    ,
    done:{
        type:Sequlize.DataTypes.BOOLEAN,
        defaultValue:false
    }
})

module.exports={
    db,Tasks
}