import express from "express";
import { HealthCareTeamController } from "src/controllers/healthCareTeam.controller";

const healthCareTeamcontroller = new HealthCareTeamController();
const api = express.Router();

api.get("/healthCareTeam", healthCareTeamcontroller.getHealthCareTeam);
api.get(
  "/healthCareTeam/:document",
  healthCareTeamcontroller.getOneHealthCareTeam
);
api.post("/healthCareTeam", healthCareTeamcontroller.insertHealthCareTeam);
api.put(
  "/healthCareTeam/:document",
  healthCareTeamcontroller.updateHealthCareTeam
);
api.delete(
  "/healthCareTeam/:document",
  healthCareTeamcontroller.deleteHealthCareTeam
);

export const healthCareTeamRoutes = api;
