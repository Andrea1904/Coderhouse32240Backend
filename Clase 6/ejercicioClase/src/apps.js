const express = require('express');

const app = express();

//El endpoint del método GET a la ruta  ‘/bienvenida’ deberá devolver un html con letras en color azul, en una string, dando la bienvenida.

app.get('/bienvenida',(req,res)=>{
    res.send(`<h1 style="color:blue;">
    Aquí tenemos nuestro primer GET</h1>`)
})

//http://localhost:8080/bienvenida
//El endpoint del método GET a la ruta ‘/usuario’ deberá devolver un objeto con los datos de un usuario falso: {nombre, apellido,edad, correo}
app.get('/usuario',(req,res)=>{
    res.send({
        nombre:"Andrea",
        apellido:"López",
        edad:30,
        correo:"andrea.lopez@gmail.com"
    })
})
//http://localhost:8080/usuario
app.listen(8080,()=>console.log("Listening on 8080"))