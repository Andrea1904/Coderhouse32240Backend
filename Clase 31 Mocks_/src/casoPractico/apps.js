import express from "express";
import usersRouter from "./routes/users.js"

const app = express();
const PORT ='8080';
app.use('/api/users',usersRouter);
app.listen(PORT,()=>console.log("Server Arriba"))