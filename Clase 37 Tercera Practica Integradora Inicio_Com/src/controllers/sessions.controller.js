import jwt from 'jsonwebtoken';
import config from '../config/config.js'

const register =(req,res) =>{
    res.send({status:"success",message:"Usuario Registra",payload:req.user._id})
}
const failedRegister=(req,res) =>{
    res.send("Registro Fallido")
}

const login =(req,res)=>{
    const serializeUser ={
        id: req.user._id,
        name: req.user.first_name,
        role:req.user.role,
        email: req.user.email
    }
    const token =jwt.sing(serializeUser,config.jwt.SECRET,{expiresIn:"1h"})
    res.cookie(config.jwt.COOKIE,token,{maxAge:3600000}).send({status:"succes",payload:serializeUser})
}

const failedLogin=(req,res) =>{
    res.send("Login Fallido")
}
export default{
    login,
    register,
    failedLogin,
    failedRegister
}