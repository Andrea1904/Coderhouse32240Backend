import fs from 'fs';
import crypto from 'crypto';

const path = './files/usuarios.json'

export default class userManager {

    getUsuarios = async() =>{
        if(fs.existsSync(path)){
            const datos = await fs.promises.readFile(path,'utf-8');
            const usuarios = JSON.parse(datos);
            return usuarios;
        }else return [];
    }

    crearUsuario = async(usuario) =>{
        const usuarios = await this.getUsuarios();
        usuario.salt = crypto.randomBytes(128).toString('base64');
        usuario.contrasena = crypto.createHmac('sha256',usuario.salt).update(usuario.contrasena).digest('hex');
        usuarios.push(usuario);
        await fs.promises.writeFile(path,JSON.stringify(usuarios,null,'\t'));
        return usuario;
    }

    validarUsuario = async(username,contrasena) =>{
        const usuarios = await this.getUsuarios();
        const usuarioIndex = usuarios.findIndex(u=>u.nombre_usuario===username);
        if(usuarioIndex===-1) {
            console.log("Usuario no encontrado");
            return;
        }
        const usuario = usuarios[usuarioIndex];
        const newCodigo = crypto.createHmac('sha256',usuario.salt).update(contrasena).digest('hex');
        
        if(newCodigo===usuario.contrasena){
            console.log("Ingreso al sistema");
        }else{
            console.log("Contraseña Inválida");
        }
    }
}