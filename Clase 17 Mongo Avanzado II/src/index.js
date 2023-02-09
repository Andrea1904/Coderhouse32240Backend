import mongoose from "mongoose";
import orderModel from "./models/order.js";


const enviroment =async ()=>{
    await mongoose.connect('mongodb+srv://CoderUser:A123456*@pruebacoder.rpvqwdz.mongodb.net/?retryWrites=true&w=majority');
/*
    let result =await orderModel.insertMany (
        [
            {name: "Carnes", size:"small",price:10,quantity:5, date:"2023-02-08"},
            {name: "Queso", size:"medium",price:15,quantity:10, date:"2023-02-08"},
            {name: "Colombiana", size:"medium",price:10,quantity:25, date:"2023-02-08"},
            {name: "Queso", size:"medium",price:5,quantity:1, date:"2023-02-08"},
            {name: "Colombiana", size:"medium",price:16,quantity:5, date:"2023-02-08"},
        ]
    )
    console.log(result)*/
       let orders= await orderModel.aggregate([
            {
                // 5- pizzas
                $match : {size: "medium"}
            },
            {
                $group: {_id:"$name",totalQuantity:{$sum:"$quantity"}}
            },
            {
                $sort:{ totalQuantity:-1}
            },
            {
                $group: {_id:1,orders :{$push:"$$ROOT"}}
            },
            {
             $project:{"_id":0, orders:"orders" }
            },
            {
                $merge:{
                    into: 'reports' 
                }
            }
        ])
        console.log(orders);
}
enviroment();