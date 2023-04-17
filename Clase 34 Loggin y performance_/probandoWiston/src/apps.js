import express from "express";
import { addLogger } from "../utils/logger.js";
import winston from "winston/lib/winston/config/index.js";

const app =express();

/*
app.use(addLogger);
app.get('/',(req,res)=>{
    req.logger.warning('Alerta!');
    res.send({message: "Probando nuestro logger"})
})*/

app.get('/operacionSencilla',(req,res)=>{
    let sum =0;
    for( let i =0;i<1000000 ;i++){
        sum+=i
    }
    res.send({sum})
})

app.get('/operacionCompleja',(req,res)=>{
    let sum =0;
    for( let i =0;i<5e8 ;i++){
        sum+=i
    }
    res.send({sum})
})
app.listen (8080,()=>console.log("Server Arriba"))