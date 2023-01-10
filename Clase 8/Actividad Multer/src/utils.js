
import multer from 'multer';
import {fileURLToPath} from 'url';
// configuracion del muler para poder utilizar el uploader
const __filename = fileURLToPath(import.meta.url);

// configurar donde se almacenan los datos
const storage= multer.diskStorage({
        destination: function(req,file,cb){  // destion donde se va a guardar el archivo osea la carpeta
        cb(null,__dirname+'/public/images')  // se especifica la carpeta 
        console.log("--->ubicacion"+ cb)
    },
    filename: function(req,file,cb) {// nombre que tendra el archivo 
        console.log(file);
        cb(null,file.originalname) // indicamos que tome el nombre inicial
        console.log("---archivo"+ file)
    }

})

export const uploader = multer({storage});