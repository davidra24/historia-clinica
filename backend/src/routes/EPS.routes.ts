import express from "express";
import { EPSController } from "src/controllers/EPS.controller";

const EPScontroller = new EPSController();
const api = express.Router();

api.get("/EPS", EPScontroller.getEPS);
api.get("/EPS/:document", EPScontroller.getOneEPS);
api.post("/EPS", EPScontroller.insertEPS);
api.put("/EPS/:document", EPScontroller.updateEPS);
api.delete("/EPS/:document", EPScontroller.deleteEPS);

export const EPSRoutes = api;
