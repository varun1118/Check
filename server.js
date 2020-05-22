const express= require('express')

const app=express()

const PORT =process.env.PORT || 4444

app.use('/',express.static(__dirname+'/public'))

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})