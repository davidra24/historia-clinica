import express from "express";
import { ContactController } from "src/controllers/contact.controller";

const contactcontroller = new ContactController();
const api = express.Router();

api.get("/contacts", contactcontroller.getContacts);
api.get("/contacts/:document", contactcontroller.getOneContact);
api.post("/contacts", contactcontroller.insertContact);
api.put("/contacts/:document", contactcontroller.updateContact);
api.delete("/contacts/:document", contactcontroller.deleteContact);

export const contactRoutes = api;
