import express from "express";
import userRouter from "./routes/users.js"
import errorHandle from "./middlewares/errors/index.js"

const app = express();
const server = app.listen(8080, () => console.log("Server arriba"));
app.use(express.json())

app.use('/api/users',userRouter)
app.use(errorHandle)
