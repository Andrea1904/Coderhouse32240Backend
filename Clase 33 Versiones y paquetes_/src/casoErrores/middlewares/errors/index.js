import EError from "../errors/index.js";
export default (error,req,res,next)=>{
    console.log(error.cause);
    switch(error.code){
        case EError.INVALID_TYPES_ERROR:
        res.send({status:"error",error:error.name})
        break;
        default:
            res.send({status:"error", error:"Error desconocido"})
    }
}