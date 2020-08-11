import express from "express";
import { ProfessionController } from "src/controllers/profession.controller";

const professioncontroller = new ProfessionController();
const api = express.Router();

api.get("/professions", professioncontroller.getProfessions);
api.get("/professions/:document", professioncontroller.getOneProfession);
api.post("/professions", professioncontroller.insertProfession);
api.put("/professions/:document", professioncontroller.updateProfession);
api.delete("/professions/:document", professioncontroller.deleteProfession);

export const professionRoutes = api;
