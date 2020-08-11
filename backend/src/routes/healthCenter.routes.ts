import express from "express";
import { HealthCenterController } from "src/controllers/healthCenter.controller";

const healthCentercontroller = new HealthCenterController();
const api = express.Router();

api.get("/healthCenters", healthCentercontroller.getHealthCenters);
api.get("/healthCenters/:document", healthCentercontroller.getOneHealthCenter);
api.post("/healthCenters", healthCentercontroller.insertHealthCenter);
api.put("/healthCenters/:document", healthCentercontroller.updateHealthCenter);
api.delete(
  "/healthCenters/:document",
  healthCentercontroller.deleteHealthCenter
);

export const healthCenterRoutes = api;
