import {fileURLToPath} from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);//decodifica la URL del archivo en una cadena de ruta 
//meta.url:Contiene información sobre el módulo, como la URL del módulo.

const __dirname = dirname(__filename);
//Se utiliza utils.js com método para poder crear nuestro propio __dirname para gestión
//de rutas absolutas en ES6.

export default __dirname;