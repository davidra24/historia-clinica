import express from 'express';
import { EPSController } from '../controllers/EPS.controller';
import { auth } from '../middlewares/passport';

const EPScontroller = new EPSController();
const api = express.Router();

api.get('/EPS', auth, EPScontroller.getEPS);
api.get('/EPS/:id', auth, EPScontroller.getOneEPS);
api.post('/EPS', auth, EPScontroller.insertEPS);
api.put('/EPS/:id', auth, EPScontroller.updateEPS);
api.delete('/EPS/:id', auth, EPScontroller.deleteEPS);

export const EPSRoutes = api;
