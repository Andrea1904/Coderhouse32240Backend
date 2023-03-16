import { Router } from "express";
import controlador from "../controlador/operaciones.js"

const router =Router();

router.get('/suma', controlador.suma)
/*router.get('/rest', controlador.resta)
router.get('/multiplicacion',####)
router.get('/division',####)*/
router.get('/listar',controlador.listar)
export default router
