import { Router } from "express";
import Contacts from "../dao/mongo/contact.mongo.js";

const router  =Router();
const contactService =new Contacts();

router.get('/',async(req,res)=>{
    let result =await contactService.get();
    res.send({status:"success",payload:result})
})
export default router;
