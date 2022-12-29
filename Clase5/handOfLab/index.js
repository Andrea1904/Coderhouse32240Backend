import UserManager from "./manager/useManager.js";

const userManager = new UserManager();

const env = async() =>{
    let users = await userManager.getUsuarios();
    console.log(users) 
    let user = {
        nombre:'Andrea',
        apellido:'Lopez',
        nombre_usuario:'AndLop',
        contrasena:'12345'
    }
    await userManager.crearUsuario(user);
    let consulta = await userManager.getUsuarios();
    //validar usuario y contraseña
    console.table(consulta); 
    console.log(consulta); 
    await userManager.validarUsuario('Usr456','123')
    await userManager.validarUsuario('Usr456','123')
}
env();