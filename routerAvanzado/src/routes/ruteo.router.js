import {Router} from 'express';

export default class Routers{
    constructor(){
    this.router=Router();
    this.init();
    }

    getRouter(){
        return this.router;
    }

    init(){}
    appyCallbacks(callbacks){
        return callbacks.map((callback)=>async(...params)=>{
            try{
                await callback.apply(this,params);
                // params req, res, next
            }catch(error){
                console.log(error)
            }
        })
    }

    generateCustomREsponses=(req,res,next)=>{
       res.sendSuccess= payload => res.send ({status:"success",payload}) 
       res.sendServerError= error => res.status(500).send({status:"error",error}) 
       res.sendUserError= error => res.status(400).send({status:"error",error}) 
       next();
    }

    handlePolices = policies => (req,res,next)=>{
        if(policies[0]==="PUBLIC" ) return next();
        const authoHeaders =req.headers.autorization;
        if(!authoHeaders) res.status(401).send({status:"error",error:"No esta Autorizado"});
        const token = authoHeaders.spit(" ")[1];
        let user=jwt.verify(token,'coderTest');
        if(!policies.includes(user.role.toUpperCase ()))   res.status(403).send({error:"No esta Autorizado"});
    }

    get(path,policies,...callbacks){
        this.router.get(path,this.handlePolices(policies),this.generateCustomREsponses,this.appyCallbacks(callbacks));
    }
    post(path,policies,...callbacks){
        this.router.post(path,this.handlePolices(policies),this.generateCustomREsponses,this.appyCallbacks(callbacks));
    }
    put(path,...callbacks){
        this.router.put(path,this.generateCustomREsponses,this.appyCallbacks(callbacks));
    }
    delete(path,...callbacks){
        this.router.delete(path,this.generateCustomREsponses,this.appyCallbacks(callbacks));
    }


}