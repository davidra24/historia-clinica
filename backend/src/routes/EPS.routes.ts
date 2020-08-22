import express from "express";
import { EPSController } from "src/controllers/EPS.controller";
import { auth } from 'src/middlewares/passport';

const EPScontroller = new EPSController();
const api = express.Router();

api.get("/EPS", auth, EPScontroller.getEPS);
api.get("/EPS/:document", auth,EPScontroller.getOneEPS);
api.post("/EPS", auth, EPScontroller.insertEPS);
api.put("/EPS/:document", auth, EPScontroller.updateEPS);
api.delete("/EPS/:document", auth, EPScontroller.deleteEPS);

export const EPSRoutes = api;
