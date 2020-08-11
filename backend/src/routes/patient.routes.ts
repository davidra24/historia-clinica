import express from 'express';
import { PatientController } from 'src/controllers/patient.controller';
import { auth } from 'src/middlewares/passport';

const patientcontroller = new PatientController();
const api = express.Router();

api.get('/patients', auth, patientcontroller.getPatients);
api.get('/patients/:document', auth, patientcontroller.getOnePatient);
api.post('/patients', auth, patientcontroller.insertPatient);
api.put('/patients/:document', auth, patientcontroller.updatePatient);
api.delete('/patients/:document', auth, patientcontroller.deletePatient);

export const patientRoutes = api;
