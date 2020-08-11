import express from "express";
import { ContactPersonController } from "src/controllers/contactPerson.controller";

const contactPersoncontroller = new ContactPersonController();
const api = express.Router();

api.get("/contactsPerson", contactPersoncontroller.getContactPerson);
api.get(
  "/contactsPerson/:document",
  contactPersoncontroller.getOneContactPerson
);
api.post("/contactsPerson", contactPersoncontroller.insertContactPerson);
api.put(
  "/contactsPerson/:document",
  contactPersoncontroller.updateContactPerson
);
api.delete(
  "/contactsPerson/:document",
  contactPersoncontroller.deleteContactPerson
);

export const contactPersonRoutes = api;
