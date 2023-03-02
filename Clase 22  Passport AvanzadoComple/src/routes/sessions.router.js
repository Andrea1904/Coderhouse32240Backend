import { Router } from "express";
import passport from "passport";

const router = Router();

router.post('/login', passport.authenticate('login', {failureRedirect:'/faillogin'})   ,async(req,res)=>{
    const {email, password}= req.body;
       jwt.sign(email , 'secret_key' , (err,token) => {
           if(err){
              res.status(400).send({msg : 'Error'})
           }
      else {
              res.send({msg:'success' , token: token})
           }
        })
        
    res.send({status:"success",payload:req.user})


     })

router.get('/faillogin',async(req,res)=>{
    
    console.log("Fallo la estrategia");
    res.send ({error:"Failed"})
    
})

router.get('/github',passport.authenticate('github',{scope:['user:email']},async(req,res)=>{}))


router.get('/githubcallback',passport.authenticate('github', {failureRedirect:'/login'}),async(req,res)=>{
    req.session.user =req.user,
    res.redirect('/');
})

export default router;