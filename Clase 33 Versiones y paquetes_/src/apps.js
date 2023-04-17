import express from "express";
import compression from "express-compression";

const app = express();
const server = app.listen(8080, () => console.log("Server arriba"));

app.use(
  compression({
    brotli: { enabled: true, zlib: {} },
  })
);

//app.use(compression());
app.get("/", (req, res) => {
  let resultado = " Soy un string demasiaado muy largo para una prueba";
  for (let i = 0; i < 5e4; i++) {
    resultado += " Soy un string demasiaado muy largo para una prueba";
  }
  res.send(resultado);
});
