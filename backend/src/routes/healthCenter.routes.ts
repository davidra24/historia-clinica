import express from 'express';
import { HealthCenterController } from 'src/controllers/healthCenter.controller';
import { auth } from 'src/middlewares/passport';

const healthCentercontroller = new HealthCenterController();
const api = express.Router();

api.get('/healthCenters', auth, healthCentercontroller.getHealthCenters);
api.get('/healthCenters/:id', auth, healthCentercontroller.getOneHealthCenter);
api.post('/healthCenters', auth, healthCentercontroller.insertHealthCenter);
api.put('/healthCenters/:id', auth, healthCentercontroller.updateHealthCenter);
api.delete(
  '/healthCenters/:id',
  auth,
  healthCentercontroller.deleteHealthCenter
);

export const healthCenterRoutes = api;
