const express =require('express');

const app = express()

app.get('/saludo',(req,res)=>{
    res.send("Hola abriendo el express")
})

app.listen(8080,()=>console.log("Servicio arriba"))
