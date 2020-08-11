import express from "express";
import { userRoutes } from "./user.routes";
import { EPSRoutes } from "./EPS.routes";
import { attentionCenterRoutes } from "./attentionCenter.routes";
import { contactRoutes } from "./contact.routes";
import { contactPersonRoutes } from "./contactPerson.routes";
import { generalMedicalFeaturesRoutes } from "./generalMedicalFeatures.routes";
import { healthCareTeamRoutes } from "./healthCareTeam.routes";
import { healthCenterRoutes } from "./healthCenter.routes";
import { patientRoutes } from "./patient.routes";
import { personRoutes } from "./person.routes";
import { professionRoutes } from "./profession.routes";
import { queryRoutes } from "./query.routes";
import { specialtyRoutes } from "./specialty.routes";

const apiRoutes = express.Router();

apiRoutes.use(
  userRoutes,
  EPSRoutes,
  personRoutes,
  professionRoutes,
  contactRoutes,
  specialtyRoutes,
  healthCenterRoutes,
  patientRoutes,
  contactPersonRoutes,
  healthCareTeamRoutes,
  attentionCenterRoutes,
  queryRoutes,
  generalMedicalFeaturesRoutes
);

export const api = apiRoutes;
