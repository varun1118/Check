const express= require('express')

const app=express()

const PORT =process.env.PORT || 4444

app.get('/',(req,res)=>{
    res.send('HELLO WORLD')
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})