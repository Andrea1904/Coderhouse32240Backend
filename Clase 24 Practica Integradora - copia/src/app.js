import  express  from "express";
import __dirname from "./utils.js";
import usersRouter from './routes/users.router.js'
import courseRouter from './routes/courses.router.js'
import viewRouter from './routes/views.router.js'
import sessionsRouter from './routes/sessions.router.js'
import handlebars from 'express-handlebars';
import mongoose from "mongoose";

// lo que no estaba
import cookieParser from 'cookie-parser';
import initializePassport from './config/passport.config.js';
import passport from 'passport';

const app =express();
const PORT =8080;

const connection = mongoose.connect('mongodb+srv://CoderUser:A123456*@pruebacoder.rpvqwdz.mongodb.net/?retryWrites=true&w=majority')

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// no se esta inicializando la estrategia

initializePassport();
app.use(passport.initialize());
app.use(cookieParser());

app.use('/',viewRouter);
app.use('/api/users',usersRouter);
app.use('/api/courses',courseRouter);
app.use('/api/sessions',sessionsRouter);




const server =app.listen(PORT,()=>console.log(`Server arriba: ${PORT}`));



