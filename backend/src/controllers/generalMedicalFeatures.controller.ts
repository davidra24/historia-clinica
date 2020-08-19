import express, { Request, Response } from "express";
import { db } from "../database";
import generalMedicalFeaturesDB from "../database/GeneralMedicalFeatures.database";
import { cryptedResponse, decryptRequest } from "src/util/cryptedConnection";

export class GeneralMedicalFeaturesController {
  app = express();
  constructor() {
    this.createTable();
  }
  async createTable() {
    await db
      .none(generalMedicalFeaturesDB.createTable)
      .then(() => ({
        ok: true,
        status: "success creating table",
        message: "general medical features table created",
        data: null,
      }))
      .catch((error) => ({
        ok: false,
        status: "unsuccess creating table",
        message: error,
        data: null,
      }));
  }
  async getGeneralMedicalFeatures(req: Request, res: Response) {
    await db
      .any(generalMedicalFeaturesDB.getAllGeneralMedicalFeatures)
      .then((generalMedicalFeatures) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: "success getting all general medical features",
          message:
            "Se han obtenido todas las caracteristicas medicas generales de la base de datos",
          data: generalMedicalFeatures,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: "unsuccess getting all general medical features",
          message: `Ha ocurrido un error inesperado al obtener todas las caracteristicas medicas generales`,
          data: error.message.toString(),
        })
      );
  }
  async getOneGeneralMedicalFeatures(req: Request, res: Response) {
    const { id } = req.params;
    await db
      .one(() => generalMedicalFeaturesDB.getOneGeneralMedicalFeatures(id))
      .then((generalMedicalFeatures) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: "success getting one general medical features",
          message: `Se han obtenido las caracteristicas medicas generales ${id}`,
          data: generalMedicalFeatures,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: "unsuccess getting one general medical features",
          message: `Ha ocurrido un error inesperado al obtener las caracteristicas medicas generales ${id}`,
          data: error.message,
        })
      );
  }
  async insertGeneralMedicalFeatures(req: Request, res: Response) {
    const { generalMedicalFeatures } = await decryptRequest(req);
    await db
      .none(() =>
        generalMedicalFeaturesDB.insertGeneralMedicalFeatures(
          generalMedicalFeatures
        )
      )
      .then((MedicalFeatures) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: "success inserting general medical features",
          message: `Se han creado las caracteristicas medicas generales ${generalMedicalFeatures.id} correctamente`,
          data: MedicalFeatures,
        })
      )
      .catch((error) => {
        cryptedResponse(res, 500, {
          ok: false,
          status: "unsuccess inserting general medical features",
          message: `Ha ocurrido un error inesperado con las caracteristicas medicas generales ${generalMedicalFeatures.id}`,
          data: error.toString(),
        });
      });
  }
  async updateGeneralMedicalFeatures(req: Request, res: Response) {
    const { id } = req.params;
    const { generalMedicalFeatures } = await decryptRequest(req);
    await db
      .none(() =>
        generalMedicalFeaturesDB.updateGeneralMedicalFeatures(
          id,
          generalMedicalFeatures
        )
      )
      .then((MedicalFeatures) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: "success updating general medical features",
          message: `Se han actualizado las caracteristicas medicas generales ${generalMedicalFeatures.id} correctamente`,
          data: MedicalFeatures,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: "unsuccess updating general medical features",
          message: `Ha ocurrido un error inesperado al actualizar las caracteristicas medicas generales ${id}`,
          data: error.toString(),
        })
      );
  }
  async deleteGeneralMedicalFeatures(req: Request, res: Response) {
    const { id } = req.params;
    await db
      .result(() => generalMedicalFeaturesDB.deleteGeneralMedicalFeatures(id))
      .then((generalMedicalFeatures) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: "success deleting general medical features",
          message: `Se han eliminado las caracteristicas medicas generales ${id} correctamente`,
          data: generalMedicalFeatures,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: "unsuccess deleting general medical features",
          message: `Ha ocurrido un error inesperado al eliminar las caracteristicas medicas generales ${id} correctamente`,
          data: error.toString(),
        })
      );
  }
}
