import express from 'express';
import { UserController } from '../controllers/user.controller';

const usercontroller = new UserController();
const api = express.Router();

api.get('/users', usercontroller.getUsers);
api.get('/users/:document', usercontroller.getOneuser);
api.post('/users', usercontroller.insertUser);
api.put('/users/:document', usercontroller.updateUser);
api.delete('/users/:document', usercontroller.deleteUser);

api.post('/login', usercontroller.login);
api.post('/verify', usercontroller.validateUser);

export const userRoutes = api;
