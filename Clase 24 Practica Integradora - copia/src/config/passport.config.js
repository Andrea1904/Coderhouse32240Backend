import passport from 'passport';
import local from 'passport-local';
import Users from '../dao/dbManagers/users.js'
import {createHast,isValidPassword} from '../utils.js'

const LocalStrategy =local.Strategy;
const userService =new Users();

const initializePassport =async () =>
{
    passport.use('register', new LocalStrategy({passReqToCallback:true,usernameField:'email',session:false},
    async(req,email,password,done)=>{
        try{
            // no cree la variable
            const {first_name,last_name,birthDate,dni,gender} = req.body;

            if(!first_name || !last_name || !password ||!birthDate) return  done(null,false,{message:"Incomplete values"})
            const exists = await userService.getBy ({email:email});
            if(exists)return done (null,false,{message:"User already exists"})
            const hashedPassword = await createHast(password);

            const newUser={
                first_name,
                last_name,
                email,
                dni,
                birthDate,
                gender,
                password:hashedPassword
            }

            let result = await userService.saveUser(newUser);
            return done(null, result)
        }catch(error){
            done(error)
        }
    }))


    passport.use ('login', new LocalStrategy({usernameField:'email', session:false},
    async(email,password,done)=>{
        try{
            const user = await userService.getBy({email})
            if(!user) return done(null,false,{message:"User no found"});
            const passwordValidate =await isValidPassword(user,password)
            if(!passwordValidate)return done(null, false, {message: " Incorrect password"})
            return done(null,user)
        }catch(error){
            return done(error)
        }
    }))

    passport.serializeUser((user,done)=>{
        done (null,user._id)
    })

    passport.deserializeUser (async(id,done)=>{
        let result =await userService.findOne({_id:id})
        return done (null,result)
    })
}

export default initializePassport;