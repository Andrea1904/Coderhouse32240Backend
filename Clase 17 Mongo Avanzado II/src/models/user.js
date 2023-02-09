import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const usersCollection= 'users';
const userSchema= new mongoose.Schema({
    fisrt_name:String,
    last_name:String,
    email:String,
    gender:String,
})
userSchema.plugin(mongoosePaginate);
const usersModel =mongoose.model(usersCollection,userSchema);
export default usersModel;