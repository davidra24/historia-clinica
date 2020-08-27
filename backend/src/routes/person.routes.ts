import express from 'express';
import { PeopleController } from 'src/controllers/people.controller';
import { auth } from 'src/middlewares/passport';

const personcontroller = new PeopleController();
const api = express.Router();

api.get('/people', auth, personcontroller.getPeople);
api.get('/people/:document', auth, personcontroller.getOnePerson);
api.get(
  '/peopleViewPerson/:document',
  auth,
  personcontroller.getViewDataPerson
); //la de caracteriscas generales
api.get(
  '/peopleViewQueries/:document',
  auth,
  personcontroller.getViewDataQueries
); //consulta completa por persona
api.get(
  '/peopleViewQueriesSpecialty/:document/:specialty',
  auth,
  personcontroller.getViewDataQueriesSpecialty
); //consulta completa por persona y especialidad
api.post('/people', auth, personcontroller.insertPerson);
api.put('/people/:document', auth, personcontroller.updatePerson);
api.delete('/people/:document', auth, personcontroller.deletePerson);

export const personRoutes = api;
