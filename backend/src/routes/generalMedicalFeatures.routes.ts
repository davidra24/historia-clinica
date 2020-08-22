import express from "express";
import { GeneralMedicalFeaturesController } from "src/controllers/generalMedicalFeatures.controller";
import { auth } from 'src/middlewares/passport';

const generalMedicalFeaturescontroller = new GeneralMedicalFeaturesController();
const api = express.Router();

api.get("/generalMedicalFeatures", auth, generalMedicalFeaturescontroller.getGeneralMedicalFeatures);
api.get("/generalMedicalFeatures/:document", auth, generalMedicalFeaturescontroller.getOneGeneralMedicalFeatures);
api.post("/generalMedicalFeatures", auth, generalMedicalFeaturescontroller.insertGeneralMedicalFeatures);
api.put("/generalMedicalFeatures/:document", auth, generalMedicalFeaturescontroller.updateGeneralMedicalFeatures);
api.delete("/generalMedicalFeatures/:document", auth, generalMedicalFeaturescontroller.deleteGeneralMedicalFeatures);

export const generalMedicalFeaturesRoutes = api;
