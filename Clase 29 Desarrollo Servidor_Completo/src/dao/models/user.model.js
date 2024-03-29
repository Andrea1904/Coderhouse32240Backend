import mongoose from "mongoose";

const collection ='users';

const schema= new mongoose.Schema({
    name:String,
    email:String,
    role : String,
    orders:[
        {
            type:mongoose.SchemaTypes.ObjectId,
            ref:'orders'
        }
    ]
})

const userModel = mongoose.model(collection,schema)
export default userModel;