import express from "express";
import { QueryController } from "src/controllers/query.controller";

const querycontroller = new QueryController();
const api = express.Router();

api.get("/queries", querycontroller.getQueries);
api.get("/queries/:document", querycontroller.getOneQuery);
api.post("/queries", querycontroller.insertQuery);
api.put("/queries/:document", querycontroller.updateQuery);
api.delete("/queries/:document", querycontroller.deleteQuery);

export const queryRoutes = api;
