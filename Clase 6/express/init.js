import express from 'express';
//const express =require('express');
const app = express()

app.get('/actualizacion',(req,res)=>{
    res.send("Hola abriendo actualizacion")
})

app.get('/borrado',(req,res)=>{
    res.send("Hola abriendo el express")
})
app.listen(8080,()=>
console.log("Servicio arriba"))
