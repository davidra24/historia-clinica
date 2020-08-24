import express from "express";
import { AttentionCenterController } from "src/controllers/attentionCenter.controller";
import { auth } from 'src/middlewares/passport';

const attentionCentercontroller = new AttentionCenterController();
const api = express.Router();

api.get("/attentionCenters", auth, attentionCentercontroller.getAttentionCenters);
api.get("/attentionCenters/:id/:document", auth, attentionCentercontroller.getOneAttentionCenter);
api.get('/attentionCentersView/:id', auth, attentionCentercontroller.getViewData);
api.post("/attentionCenters", auth, attentionCentercontroller.insertAttentionCenter);
api.put("/attentionCenters/:id/:document", auth, attentionCentercontroller.updateAttentionCenter);
api.delete("/attentionCenters/:id/:document", auth, attentionCentercontroller.deleteAttentionCenter);

export const attentionCenterRoutes = api;
