//import {Router} from 'express';
const {Router}= require( 'express');
//import { registerStudents } from '../controller/students.controller';
const {registerStudents} =require('../controller/students.controller');
const router= Router();

router.route('/registration').post(registerStudents);
//router.route('/login').post(login)
//export default router;
module.exports=router;