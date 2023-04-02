import express from "express";
import userRouter from "./src/routes/users.router.js";
import bussinessRouter from "./src/routes/business.router.js";
import orderRouter from "./src/routes/orders.router.js";
import mongoose from "mongoose";
import cors from 'cors';

const app = express();
const connection = mongoose.connect(
  "mongodb+srv://CoderUser:A123456*@pruebacoder.rpvqwdz.mongodb.net/?retryWrites=true&w=majority"
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({origin:'http://localhost:5500',methods:['GET','POST','PUT']}))
app.use("/api/user", userRouter);
app.use("/api/bussiness", bussinessRouter);
app.use("/api/orders", orderRouter);
app.listen(8080, () => console.log("Server arriba"));
