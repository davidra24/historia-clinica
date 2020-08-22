import express from "express";
import { AttentionCenterController } from "src/controllers/attentionCenter.controller";
import { auth } from 'src/middlewares/passport';

const attentionCentercontroller = new AttentionCenterController();
const api = express.Router();

api.get("/attentionCenters", auth, attentionCentercontroller.getAttentionCenters);
api.get("/attentionCenters/:document", auth, attentionCentercontroller.getOneAttentionCenter);
api.post("/attentionCenters", auth, attentionCentercontroller.insertAttentionCenter);
api.put("/attentionCenters/:document", auth, attentionCentercontroller.updateAttentionCenter);
api.delete("/attentionCenters/:document", auth, attentionCentercontroller.deleteAttentionCenter);

export const attentionCenterRoutes = api;
