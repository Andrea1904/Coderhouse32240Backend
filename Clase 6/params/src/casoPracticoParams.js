const express= require('express');

const apps= express();
const usuarios =[

    {id:"1",nombre:"pepito",apellido:"perez",edad:"20"},
    {id:"2",nombre:"manuel",apellido:"cortes",edad:"20"},
    {id:"3",nombre:"jaimito",apellido:"bello",edad:"20"}

]

apps.get('/',(req,res)=>{
    res.send({usuarios})
})

apps.get('/:idUsuario',(req,res)=>{
    let idUsuario=req.params.idUsuario;

    let usuario =usuarios.find(u=>u.id === idUsuario);
    
    // validar si el usuario existe 

    if(!usuario)
    return res.send({error: "usuario no se encontro"})
    res.send({usuario})
})

apps.listen(8080,()=>console.log("Listening on 8080"))
    