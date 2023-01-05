const express= require('express');
const app =express();
const server= app.listen(8080,()=>console.log("Activado puerto 8080"));

app.use(express.json())// pasa el json en la peticion
app.use(express.urlencoded({extended:true})) // enviar informacion desde la URL

let users = [] // se almacena todo lo que enviemos con el post


app.post('/api/user',(req,res)=>{
    let user = req.body; // el Json que enviara el usr para la petición
    if(!user.first_name || !user.last_name){
        // controlamos el error con los estados
        return res.status(400).send({status:"error",error:"Información incompleta"})
    }
    users.push(user);
    res.send({status:"Ok",message:"Usuario creado "})
    console.log("Usuario Ok");
})

app.put('/api/users:name',(req,res)=>{
    let user = req.body;
    let name = req.params.name;
    name=name.slice(1);
    users=users.filter(user=>user.first_name);

    console.log(user.first_name + "--"+user, name )
    if(user.first_name == name){
        return res.status(400).send({status:"error",error:"Información incompleta"})
    }
    users.push(user);
    res.send({status:"Ok",message:"Usuario creado "})
})

app.get('/api/user',(req,res)=>{
    res.send({users});
})

app.delete('/api/user:name',(req,res)=>{

    let name = req.params.name;
    let cantidad= users.length;
    name=name.slice(1);
    users=users.filter(user=>user.first_name!=name);
    if(users.length===cantidad){
        // controlamos el error con los estados
        return res.status(400).send({status:"error",error:"Información incompleta"})
    }
    res.send({status:"Ok",message:"Usuario borrado "})
})

