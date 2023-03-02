import express  from "express";
import passport from "passport";
import {estrategyPassport} from './utils.js';
import initPassport from "./config/passport.config.js"
import cookieParser from "cookie-parser";
import handlebars from 'express-handlebars';
import viewsRouter from "./routes/views.router.js"
import sessionsRouter from "./routes/sessions.router.js";

const app = express ();
const server=app.listen(8080,()=>console.log("Server arriba"));

app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());
initPassport();
app.use(passport.initialize());

app.engine("handlebars", handlebars.engine());

app.set("view engine", "handlebars");
app.use('/',viewsRouter);


app.get('/current',estrategyPassport('jwt'),(req,res)=>{
    res.send(req.user);
})