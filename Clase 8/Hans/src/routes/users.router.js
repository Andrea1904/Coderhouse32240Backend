import { Router } from "express";

const router=Router();
const users=[];

router.get('/',(req,res)=>{
    //Cargar el servicio para GET users
    res.send({users})
})

router.post('/',(req,res)=>{
    //Cargar el servicio para GET users
    const user=req.body;
    users.push(user)
    res.send({status:"Ok"})
})

export default router;