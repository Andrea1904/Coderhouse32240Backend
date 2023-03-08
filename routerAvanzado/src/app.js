import express from 'express';
import UsersRouter from './routes/users.router.js';
import SesionRouter from './routes/session.router.js'

const app = express();
app.listen(8080,()=>console.log("Server arriba"));

const usersRouter = new UsersRouter();
app.use('/users',usersRouter.getRouter());

const sesionRouter = new SesionRouter();
app.use('/sesion',sesionRouter.getRouter());

