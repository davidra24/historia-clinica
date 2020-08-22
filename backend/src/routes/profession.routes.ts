import express from "express";
import { ProfessionController } from "src/controllers/profession.controller";
import { auth } from 'src/middlewares/passport';

const professioncontroller = new ProfessionController();
const api = express.Router();

api.get("/professions", auth, professioncontroller.getProfessions);
api.get("/professions/:document", auth, professioncontroller.getOneProfession);
api.post("/professions", auth, professioncontroller.insertProfession);
api.put("/professions/:document", auth, professioncontroller.updateProfession);
api.delete("/professions/:document", auth, professioncontroller.deleteProfession);

export const professionRoutes = api;
