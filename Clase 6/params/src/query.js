const express= require('express');

const apps= express();
//interpretar servidor
apps.use(express.urlencoded({extended:true}))

apps.get('/ejemploQueries',(req,res)=>{

    let consultas=req.query;
    let {nombre,apellido,edad,correo}= req.query;
    res.send(consultas)
})
//http://localhost:8080/ejemploQueries
//http://localhost:8080/ejemploQueries?name=andrea
//http://localhost:8080/ejemploQueries?name=andrea&age=24&express=yes

apps.listen(8080,()=>console.log("Listening on 8080"))
    