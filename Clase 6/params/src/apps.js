const express= require('express');

const apps= express();

apps.get('/unparametro/:nombre',(req,res)=>{
    console.log(req.params.nombre) 
res.send(`Nombre, ${req.params.nombre}`)
})

apps.get('/dosparametro/:nombre/:apellido',(req,res)=>{
    console.log(req.params.apellido)
    res.send(`Nombre completo, ${req.params.nombre} ${req.params.apellido}`)
    })
//http://localhost:8080/unparametro/andrea

apps.listen(8080,()=>console.log("Listening on 8080 nodemon "))
    

