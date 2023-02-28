import express  from "express";
import session from "express-session";
import storage from'session-file-store';
import MongoStore from "connect-mongo";
import handlebars from 'express-handlebars';
import __dirname from "./utils.js";
import viewsRouter from "./routes/views.router.js"
import sessionsRouter from "./routes/sessions.router.js";
import mongoose from "mongoose";
import passport from "passport";
import initPassport from "./config/passport.config.js"

const app = express ();

const PORT= process.env.PORT || 8080;
app.listen(PORT,()=>console.log("Server arriba"))

const connection = mongoose.connect('mongodb+srv://CoderUser:A123456*@pruebacoder.rpvqwdz.mongodb.net/?retryWrites=true&w=majority')

app.use(session({

    store:MongoStore.create({
        mongoUrl:"mongodb+srv://CoderUser:A123456*@pruebacoder.rpvqwdz.mongodb.net/?retryWrites=true&w=majority",
        mongoOptions:{useNewUrlParser:true,useUnifiedTopology:true},
        ttl:20
    }),
    secret:"secreCode",
    resave:false,
    saveUninitialized:false
}))

initPassport();
app.use(passport.session({
    secret:"SecretCoders"
}));

app.use(passport.initialize());

app.use('/',viewsRouter);
app.use('/api/sessions',sessionsRouter);

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));






