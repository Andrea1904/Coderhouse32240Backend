import mongoose from "mongoose";

const userCollection ='Users';

const usersSchema = new mongoose.Schema({
    first_name:{
        type:String,
        require:true
    },
    last_name:{
        type:String,
        require:true
    },
    email:
    {
        type:String,
        require:true,
        unique:true
    },
    dni: Number,

    birthDate :Date,

    gender: {
        type:String,
        enum: ["M","F"]
    },

    password: {
        type:String,
       // required: true
        require: true
    },

    role:{
        type:String,
        enum:["student","teacher"],
        default:'student'        
    },
    courses: {
        type:[
            {
                type:mongoose.SchemaTypes.ObjectId,
                ref:'Courses'
            }
        ],
        default:[]

    }

})

export const usersModel= mongoose.model (userCollection,usersSchema);