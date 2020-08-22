import express from "express";
import { ContactPersonController } from "src/controllers/contactPerson.controller";
import { auth } from 'src/middlewares/passport';

const contactPersoncontroller = new ContactPersonController();
const api = express.Router();

api.get("/contactsPerson", auth, contactPersoncontroller.getContactPerson);
api.get("/contactsPerson/:document", auth, contactPersoncontroller.getOneContactPerson);
api.post("/contactsPerson", auth, contactPersoncontroller.insertContactPerson);
api.put("/contactsPerson/:document", auth, contactPersoncontroller.updateContactPerson);
api.delete("/contactsPerson/:document", auth, contactPersoncontroller.deleteContactPerson);

export const contactPersonRoutes = api;
