import Router from './ruteo.router.js';
import jwt from 'jsonwebtoken';

export default class SesionsRouter extends Router{
    init(){
        this.post('/login',["PUBLIC"],(req,res)=>{
            let user ={
                email:req.body.email,
                role:'user'
            }

            let token= jwt.sign(user,'coderTest')
            res.sendSuccess({token})
        })

    }

}