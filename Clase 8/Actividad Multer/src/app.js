import express from 'express';
import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))

//http://localhost:8080/images/Escudo.jpg

//http://localhost:8080/index.html
app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);

const server = app.listen(8080,()=>console.log("Listening on 8080"))