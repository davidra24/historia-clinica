import express from "express";
import { GeneralMedicalFeaturesController } from "src/controllers/generalMedicalFeatures.controller";

const generalMedicalFeaturescontroller = new GeneralMedicalFeaturesController();
const api = express.Router();

api.get(
  "/generalMedicalFeatures",
  generalMedicalFeaturescontroller.getGeneralMedicalFeatures
);
api.get(
  "/generalMedicalFeatures/:document",
  generalMedicalFeaturescontroller.getOneGeneralMedicalFeatures
);
api.post(
  "/generalMedicalFeatures",
  generalMedicalFeaturescontroller.insertGeneralMedicalFeatures
);
api.put(
  "/generalMedicalFeatures/:document",
  generalMedicalFeaturescontroller.updateGeneralMedicalFeatures
);
api.delete(
  "/generalMedicalFeatures/:document",
  generalMedicalFeaturescontroller.deleteGeneralMedicalFeatures
);

export const generalMedicalFeaturesRoutes = api;
