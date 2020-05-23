const express= require('express')

const app=express()

const { db, Tasks}=require('./db')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/tasks',async (req,res)=>{
     res.send( await Tasks.findAll())
})

app.post('/tasks',async (req,res)=>{
    res.send(await Tasks.create(req.body))
})

const PORT =process.env.PORT || 4444

app.use('/',express.static(__dirname+'/public'))

db.sync()
    .then(()=>{
        app.listen(PORT,()=>{
            console.log(`http://localhost:${PORT}`)
        })
    })
