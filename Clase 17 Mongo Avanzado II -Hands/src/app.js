import  express  from "express";
import handlebars from'express-handlebars';
import __dirname from "./utils.js"
import mongoose from "mongoose";
import viewsRouter from "./routes/views.router.js"

const PORT ='8080';
const app =express();
const connection = mongoose.connect('mongodb+srv://CoderUser:A123456*@pruebacoder.rpvqwdz.mongodb.net/?retryWrites=true&w=majority',{
         useNewUrlParser:true,
         useUnifiedTopology:true,
})

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set('view engine', 'handlebars');
app.use('/',viewsRouter);

app.use(express.static(__dirname + "/public"));

const server =app.listen (PORT,()=>console.log("Server arriba"));