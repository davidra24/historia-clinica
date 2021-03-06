import express from 'express';
import { QueryController } from '../controllers/query.controller';
import { auth } from '../middlewares/passport';

const querycontroller = new QueryController();
const api = express.Router();

api.get('/queries', auth, querycontroller.getQueries);
api.get('/queries/:id', auth, querycontroller.getOneQuery);
api.get('/queriesView/:id', auth, querycontroller.getViewData); //consulta por id consulta
api.post('/queries', auth, querycontroller.insertQuery);
api.put('/queries/:id', auth, querycontroller.updateQuery);
api.delete('/queries/:id', auth, querycontroller.deleteQuery);

export const queryRoutes = api;
