import { Router } from "express";
const router =Router();

router.get ('/register',(req,res)=>{
    res.render('register');
})

router.get ('/login',(req,res)=>{
    res.render('login');
})

router.get ('/reregister',(req,res)=>{
    res.render('reregister');
})


export default router;
