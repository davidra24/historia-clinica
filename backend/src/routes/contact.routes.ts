import express from "express";
import { ContactController } from "src/controllers/contact.controller";
import { auth } from 'src/middlewares/passport';

const contactcontroller = new ContactController();
const api = express.Router();

api.get("/contacts", auth, contactcontroller.getContacts);
api.get("/contacts/:document", auth, contactcontroller.getOneContact);
api.post("/contacts", auth, contactcontroller.insertContact);
api.put("/contacts/:document", auth, contactcontroller.updateContact);
api.delete("/contacts/:document", auth, contactcontroller.deleteContact);

export const contactRoutes = api;
