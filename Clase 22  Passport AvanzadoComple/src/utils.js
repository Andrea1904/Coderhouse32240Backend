import passport from 'passport';

export const estrategyPassport=(strategy) =>{
    return async(req,res,next)=>{
        passport.authenticate(strategy,function(error,user,info){
            if(error) return next(error);
            if(!user){
                return res.status(401).send ({error:info.messages?info.messages:info.toString()});
            }
            req.user=user
            next();
        })(req,res,next);
    }
}
