import { sumar} from "../negocio/operaciones.js";

const suma =async (req,res)=>{
    let {a,b}=req.query
    res.send(`la suma es :  ${a} y ${b} es ${await sumar (Number(a), Number(b))}`)
}

const listar = async (req,res) => res.json(await listar())
export default{
    suma,
    listar
}

