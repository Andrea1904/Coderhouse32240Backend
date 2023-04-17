import express  from "express";
const app = express ();
const server=app.listen(8080,()=>console.log("Server arriba"));

app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());