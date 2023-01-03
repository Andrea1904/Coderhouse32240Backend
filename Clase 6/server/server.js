const http= require ('http');

const server =http.createServer((request,response)=>{
    response.end("Mi primer servido, probando nodemon ")
})

server.listen(8080,()=>
console.log("Mensaje de ejecución Puerto activado 8080")
)

// nodemon server.js
// Ctrol +C
