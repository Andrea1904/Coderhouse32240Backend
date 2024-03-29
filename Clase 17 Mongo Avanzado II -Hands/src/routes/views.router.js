import { Router } from "express";
import studentModel from "../models/Students.js";

const router =Router();

router.get('/students',async(req,res)=>{
    const {page=1} =req.query;
    const {docs,hasPrevPage,hasNextPage,nextPage,prevPage} =
    await studentModel.paginate({}, { limit:10 , page, lean:true});
   
    const students =docs;

    res.render('students',{
        students,
        hasPrevPage,
        hasNextPage,
        prevPage,
        nextPage
    });
})
export default router
    


