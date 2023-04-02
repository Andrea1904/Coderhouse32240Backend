import mongoose from "mongoose";

const collection = "orders";

const schema = new mongoose.Schema({
  number: Number,
  //bussines
  bussiness: {
    type: mongoose.SchemaTypes.ObjectId,
    //ref: "Bussines",
    ref: "bussiness",
  },
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "users",
  },
  //product: [],
  products: [],
  totalPrice: Number, 
});

const orderModel = mongoose.model(collection, schema);
export default orderModel;
