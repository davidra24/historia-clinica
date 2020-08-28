import express from 'express';
import { GeneralMedicalFeaturesController } from '../controllers/generalMedicalFeatures.controller';
import { auth } from '../middlewares/passport';

const generalMedicalFeaturescontroller = new GeneralMedicalFeaturesController();
const api = express.Router();

api.get(
  '/generalMedicalFeatures',
  auth,
  generalMedicalFeaturescontroller.getGeneralMedicalFeatures
);
api.get(
  '/generalMedicalFeatures/:id',
  auth,
  generalMedicalFeaturescontroller.getOneGeneralMedicalFeatures
);
api.post(
  '/generalMedicalFeatures',
  auth,
  generalMedicalFeaturescontroller.insertGeneralMedicalFeatures
);
api.put(
  '/generalMedicalFeatures/:id',
  auth,
  generalMedicalFeaturescontroller.updateGeneralMedicalFeatures
);
api.delete(
  '/generalMedicalFeatures/:id',
  auth,
  generalMedicalFeaturescontroller.deleteGeneralMedicalFeatures
);

export const generalMedicalFeaturesRoutes = api;
