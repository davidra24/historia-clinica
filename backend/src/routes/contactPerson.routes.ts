import express from 'express';
import { ContactPersonController } from 'src/controllers/contactPerson.controller';
import { auth } from 'src/middlewares/passport';

const contactPersoncontroller = new ContactPersonController();
const api = express.Router();

api.get('/contactsPerson', auth, contactPersoncontroller.getContactPerson);
api.get(
  '/contactsPerson/:document',
  auth,
  contactPersoncontroller.getOneContactPerson
);
api.get(
  '/contactsPersonView/:idPerson',
  auth,
  contactPersoncontroller.getViewData
);
api.post('/contactsPerson', auth, contactPersoncontroller.insertContactPerson);
api.put(
  '/contactsPerson/:document',
  auth,
  contactPersoncontroller.updateContactPerson
);
api.delete(
  '/contactsPerson/:userDocument',
  auth,
  contactPersoncontroller.deleteContactPerson
);

export const contactPersonRoutes = api;
