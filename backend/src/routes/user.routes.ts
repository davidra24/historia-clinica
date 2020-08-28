import express from 'express';
import { UserController } from '../controllers/user.controller';
import { auth } from '../middlewares/passport';

const usercontroller = new UserController();
const api = express.Router();

api.get('/users', auth, usercontroller.getUsers);
api.get('/users/:document', auth, usercontroller.getOneuser);
api.post('/users', usercontroller.insertUser);
api.put('/users/:document', auth, usercontroller.updateUser);
api.delete('/users/:document', auth, usercontroller.deleteUser);

api.post('/login', usercontroller.login);
api.post('/verify', usercontroller.validateUser);

export const userRoutes = api;
