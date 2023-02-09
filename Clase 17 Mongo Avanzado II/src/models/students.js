import mongoose from "mongoose";

const studentCollection='student';

const studentSchema= new mongoose.Schema({
    first_name: String,
    last_name:String,
    email: String,
    gender:String,
    grade:Number,
    group:String

})

const studentModel =mongoose.model(studentCollection,studentSchema);
export default studentModel;