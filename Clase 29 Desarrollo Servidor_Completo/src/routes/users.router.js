import { Router } from "express";
import {getUsers,getUserById, saveUser} from '../controllers/user.controller.js'
const router = Router();

router.get('/',getUsers);
router.post('/',saveUser)
//router.get('/:oid',getUserById)
router.get('/:uid',getUserById)
export default router;