import mongoose from "mongoose";

const collection ='Orders';

const schema= new mongoose.Schema({
    number:Number,
    bussines: {
        type:mongoose.SchemaTypes.ObjectId,
            ref:'Bussines'
    },
    user: {
        type:mongoose.SchemaTypes.ObjectId,
        ref:'Users'
    },
    product:[],
    totalPrice:Number
    
    
})

const orderModel = mongoose.model(collection,schema)
export default orderModel;