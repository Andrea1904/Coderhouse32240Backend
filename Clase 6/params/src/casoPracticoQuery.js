const express= require('express');

const apps= express();
apps.use(express.urlencoded({extended:true}))

const usuarios =[

    {id:"1",nombre:"pepito",apellido:"perez",edad:"20",genero:"M"},
    {id:"2",nombre:"manuel",apellido:"cortes",edad:"20",genero:"M"},
    {id:"3",nombre:"jaimito",apellido:"bello",edad:"20",genero:"M"},
    {id:"4",nombre:"martha",apellido:"castro",edad:"20",genero:"F"},
]

apps.get('/',(req,res)=>{
    let genero=req.query.genero;
    if(!genero || (genero!=="M" && genero!=="F"))
    return res.send({usuarios})

    let usuariosFiltrados = usuarios.filter(usuario=>usuario.genero===genero);
    res.send({usuarios:usuariosFiltrados})
})

apps.listen(8080,()=>console.log("Listening on 8080"))
    
// http://localhost:8080/
//http://localhost:8080/?genero=F
//http://localhost:8080/?genero=M