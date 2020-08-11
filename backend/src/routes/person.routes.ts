import express from "express";
import { PeopleController } from "src/controllers/people.controller";

const personcontroller = new PeopleController();
const api = express.Router();

api.get("/people", personcontroller.getPeople);
api.get("/people/:document", personcontroller.getOnePerson);
api.post("/people", personcontroller.insertPerson);
api.put("/people/:document", personcontroller.updatePerson);
api.delete("/people/:document", personcontroller.deletePerson);

export const personRoutes = api;
