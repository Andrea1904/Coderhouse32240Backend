import { Router } from "express";

const router=Router();
const pets=[];

router.get('/',(req,res)=>{
    //Cargar el servicio para GET users
    res.send({pets})
})

router.post('/',(req,res)=>{
    //Cargar el servicio para GET users
    const pet=req.body;
    pets.push(pet)
    res.send({status:"Ok"})
})

export default router;