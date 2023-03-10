import cousersModel from "../models/courses.js";

export default class Courses{
    constructor(){
        console.log(" Working in mongoDb")
    }

    getAll =async() =>{
        //let courses = await cousersModel.find.lean().populate('students');
        let courses = await cousersModel.find().lean().populate('students');
        return courses;
    }

    saveCourse =async (course)=>{
      //  let result = await cousersModel.create(course).populate('students');
        let result = await cousersModel.create(course);
        return result;
    } 

    updateCourse =async (id,course)=>{
        delete course._id; 
        let result = await cousersModel.updateOne({_id:id},{$set:course})
        return result;
    } 

    getById =async(id)=>{
        let course =await cousersModel.findOne({_id:id}.populate('students'))
        return course;
    }

}