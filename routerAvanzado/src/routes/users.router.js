import Router from './ruteo.router.js';

export default class UsersRouter extends Router{
    init(){
        this.get('/',["PUBLIC"],(req,res)=>{
            res.sendSuccess("Hola, estoy probando el custom responses...")
        })

        this.get('/currentUser',["USER","USER_PREMIUM"],(req,res)=>{
            res.sendSuccess(req.user)
        })
    }

}