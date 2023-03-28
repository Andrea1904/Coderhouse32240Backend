import mongoose from "mongoose";
const collection ='Bussiness';
const schema= new mongoose.Schema({
    name:String,
    product:[],  
})

const bussinessModel = mongoose.model(collection,schema)
export default bussinessModel;