import { Router } from 'express';

//  importar el uploader creado
import { uploader } from '../utils.js';

const router = Router();
let users = [];

router.get('/',(req,res)=>{
    //res.send({users})
     res.send({status:"Ok",payload:users})
})

/*
router.post('/',(req,res)=>{
    const user = req.body;
    users.push(user);
    res.send({status:"success"})
})*/


router.post('/',uploader.single('file'), function(req,res){
    console.log(req.file);
    if(!req.file){ // valida sino existe el rq.file en el momento de subirlo
      
         return res.status(400).send({status:"error",error:"No se guardo la imagen"})
    }

    let user =req.body;
    user.profile=req.file.path; // ruta de la imagen 
    users.push(user);
    res.send({status:"Ok",message:"Usuario Creado"})
})

export default router;