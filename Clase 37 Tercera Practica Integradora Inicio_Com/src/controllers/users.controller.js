import { userService, coursesService } from "../repositories/services.js";
import MailingService from "../services/mailling.js";


const getUsers =async(req,res)=>{
    let users = await userService.getAllUsers();
    if(!users) return res.status(500).send({status:"error",error: "No pudo encontrar usuarios"})
    res.send({status:"sucess",payload:users})
}

const regiterUserToCourse =async (req,res)=>{
    const{uid,cid}=req.params;
    const course =await coursesService.getCourseById(cid);
    if(!course) return res.status(404).send({status:"error",error:"No se pudo encontrar el curso"})
    const user= await userService.getBy({_id:uid});
    if(!user) return res.status(404).send({status:"error",error:"No se pudo encontrar el usuario"})
    
    let couserExists = user.courses.some(c=>c._id.toString()===cid)
    if(couserExists) return  res.status(404).send({status:"error",error:"El usuario ya tiene registrado el curso"})
 
    user.courses.push(cousers._id);
    course.studenst.push(user._id);
    await userService.update(uid,user);
    await coursesService.update(cid,course);

    const mailer = new MailingService();
    const result = await mailer.sendSimpleMail({
        from: "CoderTest",
        to: "andrea.lopez1904@gmail.com",
        subject:" Curso registrado",
        html:`<div> Felicidades has quedado registrado </div>`
    })

    console.log(result +" //Registro de usuario")
    res.send({status:"success",message:"Usuario agregado"})
}

const createUser= async(req,res)=>{
    let {first_name , last_name,email, dni,birthdDate,gender} =req.body
    if(!first_name || !last_name|| !email|| ! dni|| !birthdDate|| !gender ) return res.status(400).send({status:"error",error:"Datos Incompletos"})  

    let result =await userService.createUser({
        first_name , 
        last_name,
        email, 
        dni,
        birthdDate,
        gender
    })
    if(!result) return res.status(500).send({status:"error",error:"Fallo algo en el server"})
    res.send({status:"success",payload:result})
}

export default{
    getUsers,
    createUser,
    regiterUserToCourse
}