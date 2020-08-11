import express from "express";
import { SpecialtyController } from "src/controllers/specialty.controller";

const specialtycontroller = new SpecialtyController();
const api = express.Router();

api.get("/specialties", specialtycontroller.getSpecialties);
api.get("/specialties/:document", specialtycontroller.getOneSpecialty);
api.post("/specialties", specialtycontroller.insertSpecialty);
api.put("/specialties/:document", specialtycontroller.updateSpecialty);
api.delete("/specialties/:document", specialtycontroller.deleteSpecialty);

export const specialtyRoutes = api;
