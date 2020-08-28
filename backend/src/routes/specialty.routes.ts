import express from 'express';
import { SpecialtyController } from '../controllers/specialty.controller';
import { auth } from '../middlewares/passport';

const specialtycontroller = new SpecialtyController();
const api = express.Router();

api.get('/specialties', auth, specialtycontroller.getSpecialties);
api.get('/specialties/:document', auth, specialtycontroller.getOneSpecialty);
api.post('/specialties', auth, specialtycontroller.insertSpecialty);
api.put('/specialties/:document', auth, specialtycontroller.updateSpecialty);
api.delete('/specialties/:document', auth, specialtycontroller.deleteSpecialty);

export const specialtyRoutes = api;
