import express from 'express';
import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';

// adición para ejecutar la aplicación desde cualquier otro directorio 
// revisar utils
import __dirname from './utils.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// la  raiz que se mostrara el index
app.use(express.static(`${__dirname}/public`))

//http://localhost:8080/images/Escudo.jpg
//http://localhost:8080/index.html

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);

const server = app.listen(8080,()=>console.log("Listening on 8080"))