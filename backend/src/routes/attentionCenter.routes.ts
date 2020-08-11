import express from "express";
import { AttentionCenterController } from "src/controllers/attentionCenter.controller";

const attentionCentercontroller = new AttentionCenterController();
const api = express.Router();

api.get("/attentionCenters", attentionCentercontroller.getAttentionCenters);
api.get(
  "/attentionCenters/:document",
  attentionCentercontroller.getOneAttentionCenter
);
api.post("/attentionCenters", attentionCentercontroller.insertAttentionCenter);
api.put(
  "/attentionCenters/:document",
  attentionCentercontroller.updateAttentionCenter
);
api.delete(
  "/attentionCenters/:document",
  attentionCentercontroller.deleteAttentionCenter
);

export const attentionCenterRoutes = api;
