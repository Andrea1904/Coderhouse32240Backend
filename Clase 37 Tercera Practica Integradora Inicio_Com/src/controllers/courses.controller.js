import { coursesService } from "../repositories/services.js"

const getCourses = async(req,res)=>{
    let courses =await coursesServeice.getAllCourses();
    res.send({status:"sucess",payload:courses})
}

const createCourses =async(req,res)=>{
    const {title,decription}= req.body;
    let newCourse ={
        tittle,
        decription,
        users:[],
        teacher:'sin asignar'
    }
    const result =await coursesService.createCourses(newCourse)
    res.send({status:"success",payload:result})
    
}
export default {
    createCourses,
    getCourses
}