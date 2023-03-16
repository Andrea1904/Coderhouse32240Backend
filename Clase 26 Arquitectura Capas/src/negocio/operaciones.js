import { guardar,listar as listarOper } from "../persistencia/operaciones.js";

async function sumar(a,b){
    let resultado =suma(a,b)
    await guardar({
        tipo:'sumar',
        params:[a,b],
        result: resultado
    })
    return resultado
}

async function listar (){
    return await listarOper()
}

export{
    sumar,
    listar
}