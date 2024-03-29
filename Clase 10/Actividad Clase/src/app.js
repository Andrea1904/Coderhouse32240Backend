import express from 'express';
import { Server } from 'socket.io';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import viewsRouter from './routes/views.router.js';

const app = express();
app.use(express.static(__dirname+'/public'))

app.engine('handlebars',handlebars.engine());
app.set('views',__dirname+'/views');
app.set('view engine','handlebars');

app.use('/',viewsRouter);

const server = app.listen(8080,()=>console.log("Listening"))
const socketserver = new Server(server);

const logs = []
socketserver.on('connection',socket =>{
    console.log("Inicio la comunicación")

        socket.on("message",data=>{
        logs.push({socketid:socket.id,message:data})
        socketserver.emit('log',{logs});
    })
})



