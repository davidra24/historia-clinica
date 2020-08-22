import express from "express";
import { QueryController } from "src/controllers/query.controller";
import { auth } from 'src/middlewares/passport';

const querycontroller = new QueryController();
const api = express.Router();

api.get("/queries", auth, querycontroller.getQueries);
api.get("/queries/:document", auth, querycontroller.getOneQuery);
api.post("/queries", auth, querycontroller.insertQuery);
api.put("/queries/:document", auth, querycontroller.updateQuery);
api.delete("/queries/:document", auth, querycontroller.deleteQuery);

export const queryRoutes = api;
