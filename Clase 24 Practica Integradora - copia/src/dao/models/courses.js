import mongoose from "mongoose";

//const courseCollection ='courses';
const courseCollection ='Courses';
const coursesSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    teacher:
    {
        type:String,
        //required:true
        require:true
    },

    //student:{
    students:{
        type:[
            {
                type: mongoose.SchemaTypes.ObjectId,
                ref:'Users'
            }
        ],
        default:[]

    }
})

const cousersModel= mongoose.model (courseCollection,coursesSchema);
export default cousersModel;