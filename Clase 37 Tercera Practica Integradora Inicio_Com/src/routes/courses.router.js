import { Router } from 'express';
import Courses from '../dao/dbManagers/courses.js';
import coursesController from '../controllers/courses.controller.js';
import applyPolicy from '../middleware/auth.middleware.js';
import passport from 'passport';

const router = Router();
router.use(passport.authenticate('current',{session:false}))

router.get('/',applyPolicy(['STUDENT']),coursesController.getCourses)
router.post('/',applyPolicy(['TEACHER'],coursesController.createCourses))

export default router;