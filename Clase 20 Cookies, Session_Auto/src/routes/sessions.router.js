import { Router } from "express";
import passport from "passport";
import User from "../models/user.js";
import { createHash, isValidPassword } from "../utils.js";

const router = Router();

router.post('/register',passport.authenticate('register',{failureRedirect:'/failregister'}),async(req,res)=>{
    res.send({status:"success",message:"Usuario Registrado"})
})

router.get('/failregister',async(req,res)=>{
    
    console.log("Fallo la estrategia");
    res.send ({error:"Failed"})
    
})

router.post('/login', passport.authenticate('login', {failureRedirect:'/faillogin'})   ,async(req,res)=>{
    const {email, password}= req.body;
   
    if (!req.user) return res.status(400).send({status:"error",error:"Contraseña invalida"}); 
      
    req.session.user = {
        first_name:req.user.first_name,
        last_name: req.user.last_name,
        age: req.user.age,
        email:req.user.email
    }

    res.send({status:"success",payload:req.user})
})
router.get('/faillogin',async(req,res)=>{
    
    console.log("Fallo la estrategia");
    res.send ({error:"Failed"})
    
})

router.post('/reregister',async(req,res)=>{
    const {first_name, last_name, email,age, password}= req.body;
     if( !first_name ||!last_name ||! email ||!age||! password )
     return res.status(400).send({status:"error",error:"Valores incompletos"})
 
     let user ={
         email,
         password:createHash(password)
     }
 
     user = User.create(user);
    
     res.send({status:"success",payload:user})
 
 })
export default router;