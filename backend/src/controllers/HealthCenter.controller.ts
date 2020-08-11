import express, { Request, Response } from "express";
import { db } from "../database";
import healthCenterDB from "../database/HealthCenters.database";
import { cryptedResponse, decryptRequest } from "src/util/cryptedConnection";

export class HealthCenterController {
  app = express();
  constructor() {
    this.createTable();
  }
  async createTable() {
    await db
      .none(healthCenterDB.createTable)
      .then(() => ({
        ok: true,
        status: "success creating table",
        message: "health center table created",
        data: null,
      }))
      .catch((error) => ({
        ok: false,
        status: "unsuccess creating table",
        message: error,
        data: null,
      }));
  }
  async getHealthCenters(req: Request, res: Response) {
    await db
      .any(healthCenterDB.getAllHealthCenters)
      .then((healthCenter) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: "success getting all health centers",
          message:
            "Se han obtenido todos los centros de salud de la base de datos",
          data: healthCenter,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: "unsuccess getting all health centers",
          message: `Ha ocurrido un error inesperado al obtener todos los centros de salud`,
          data: error.message.toString(),
        })
      );
  }
  async getOneHealthCenter(req: Request, res: Response) {
    const { idCenter } = req.params;
    await db
      .one(() => healthCenterDB.getOneHealthCenter(parseInt(idCenter)))
      .then((healthCenter) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: "success getting one health center",
          message: `Se han obtenido el centro de salud ${idCenter}`,
          data: healthCenter,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: "unsuccess getting one health center",
          message: `Ha ocurrido un error inesperado al obtener el centro de salud ${idCenter}`,
          data: error.message,
        })
      );
  }
  async insertHealthCenter(req: Request, res: Response) {
    const { HealthCenter } = await decryptRequest(req);
    await db
      .none(() => healthCenterDB.insertHealthCenter(HealthCenter))
      .then((healthCenter) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: "success inserting health center",
          message: `Se han creado el centro de salud ${HealthCenter.idCenter} correctamente`,
          data: healthCenter,
        })
      )
      .catch((error) => {
        cryptedResponse(res, 500, {
          ok: false,
          status: "unsuccess inserting health center",
          message: `Ha ocurrido un error inesperado con el centro de salud ${HealthCenter.idCenter}`,
          data: error.toString(),
        });
      });
  }
  async updateHealthCenter(req: Request, res: Response) {
    const { idCenter } = req.params;
    const { HealthCenter } = await decryptRequest(req);
    await db
      .none(() =>
        healthCenterDB.updateHealthCenter(parseInt(idCenter), HealthCenter)
      )
      .then((healthCenter) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: "success updating health center",
          message: `Se han actualizado el centro de salud ${HealthCenter.idCenter} correctamente`,
          data: healthCenter,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: "unsuccess updating health center",
          message: `Ha ocurrido un error inesperado al actualizar el centro de salud ${idCenter}`,
          data: error.toString(),
        })
      );
  }
  async deleteHealthCenter(req: Request, res: Response) {
    const { idCenter } = req.params;
    await db
      .result(() => healthCenterDB.deleteHealthCenter(parseInt(idCenter)))
      .then((healthCenter) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: "success deleting health center",
          message: `Se han eliminado el centro de salud ${idCenter} correctamente`,
          data: healthCenter,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: "unsuccess deleting health center",
          message: `Ha ocurrido un error inesperado al eliminar el centro de salud ${idCenter} correctamente`,
          data: error.toString(),
        })
      );
  }
}
