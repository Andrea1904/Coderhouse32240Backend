import express from 'express';
import handlebars from 'express-handlebars';
import path from 'path';

// en caso de que utilicemos el _-dirname
// implementar el type module  y la clase de utils

import __dirname from './utils.js';

const app= express();

// se iniciliza el motor con el app.engine
app.engine('handlebars', handlebars.engine());
// 'handlebars' motor a utilizar 
//handlebars.engine() motor instanciado

// ahora ubicaremos las vistas 

app.set('views',__dirname + '/views');

// ahora le diremos al servidor que renderice con el motor handlebars

app.set ('view engine','handlebars');

//seteamos de la pagian estatica 

//app.use(express.static(__dirname+'/public'))
app.use(express.static(path.join(__dirname, 'views')))

let food = [
    { name: "Perro", price:"100"},
    { name: "Perro", price:"200"},
    { name: "Perro", price:"300"},
    
]
app.get('/',(req,res)=>{
    //creamos un objeto de prueba para que sea el que consulta el index
    //... recuerda que el index tiene parametro de name
    let testUser={
        name:"Andrea",
        last_name: "Lopez",
        role:"user"
    }
    // ahora vamos a enviar los datos y renderizaremos la plantilla 
    res.render('index',{
        user:testUser,
        isAdmin:testUser.role==="admin",
        food}
        );
    // se envia nombre de la plantilla  y el objeto que remplaza los campos

})

const server = app.listen(8080,()=>console.log("server arriba"))