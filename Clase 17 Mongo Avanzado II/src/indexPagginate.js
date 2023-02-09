import mongoose from "mongoose";
import usersModel from "./models/user.js";

const enviroment =async ()=>{
    await mongoose.connect('mongodb+srv://CoderUser:A123456*@pruebacoder.rpvqwdz.mongodb.net/?retryWrites=true&w=majority');
    let users = await usersModel.paginate( { gender: "Female"},{limit:20,page:1})
    console.log (users);
}
enviroment();
