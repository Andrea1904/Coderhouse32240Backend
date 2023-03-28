import { Router } from "express";
import {getBussiness,getBussinessById, createBussiness, addProduct} from '../controllers/bussiness.controller.js'
const router = Router();

router.get('/',getBussiness);
router.post('/',createBussiness)

router.get('/:oid',getBussinessById)
router.put('/:oid',addProduct)

export default router;