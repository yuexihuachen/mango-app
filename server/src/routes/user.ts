import { Hono } from 'hono';
import User from '@/controller/user';

const user = new Hono();
const userController = new User();

user.post('/login', userController.login) 
user.post('/register', userController.register) 
user.post('/sendemail', userController.sendemail) 
user.post('/refresh', userController.refresh)
user.post('/verify', userController.verify)
user.post('/forgetPwd', userController.forgetPwd)

export {
    user
}