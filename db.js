const Sequlize=require('sequelize')

const db;
if(process.env.DATABASE_URL)
{
    db=new Sequlize(process.env.DATABASE_URL)
}
else{
    db =  new Sequlize({
        dialect:'sqlite',
        storage:__dirname+'/test.db'
    })    
}
 
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