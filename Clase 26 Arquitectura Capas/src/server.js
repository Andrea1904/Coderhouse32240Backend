import express from 'express'
import routerOperaciones from './rutas/operaciones.js'

const app =express();
const PORT ='8080';
const server = app.listen(PORT, () => {
    console.log(`Servidor express escuchando en el puerto ${server.address().port}`)
})

app.get('/',(req,res)=>{
    res.send('Hola Coders')
})

app.use('/operaciones',routerOperaciones)
