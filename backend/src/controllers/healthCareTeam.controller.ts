import express, { Request, Response } from "express";
import { db } from "../database";
import healthCareTeamDB from "../database/HealthCareTeam.database";
import { cryptedResponse, decryptRequest } from "src/util/cryptedConnection";

export class HealthCareTeamController {
  app = express();
  constructor() {
    this.createTable();
  }
  async createTable() {
    await db
      .none(healthCareTeamDB.createTable)
      .then(() => ({
        ok: true,
        status: "success creating table",
        message: "health care team table created",
        data: null,
      }))
      .catch((error) => ({
        ok: false,
        status: "unsuccess creating table",
        message: error,
        data: null,
      }));
  }
  async getHealthCareTeam(req: Request, res: Response) {
    await db
      .any(healthCareTeamDB.getAllHealthCareTeam)
      .then((healthCareTeam) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: "success getting all health care team",
          message:
            "Se han obtenido todos los profesionales de la salud de la base de datos",
          data: healthCareTeam,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: "unsuccess getting all health care team",
          message: `Ha ocurrido un error inesperado al obtener todos los profesionales de la salud`,
          data: error.message.toString(),
        })
      );
  }
  async getOneHealthCareTeam(req: Request, res: Response) {
    const { document } = req.params;
    await db
      .one(() => healthCareTeamDB.getOneHealthCareTeam(document))
      .then((healthCareTeam) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: "success getting one health care team",
          message: `Se han obtenido el profesional de la salud ${document}`,
          data: healthCareTeam,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: "unsuccess getting one health care team",
          message: `Ha ocurrido un error inesperado al obtener el profesional de la salud ${document}`,
          data: error.message,
        })
      );
  }
  async insertHealthCareTeam(req: Request, res: Response) {
    const { HealthCareTeam } = await decryptRequest(req);
    await db
      .none(() => healthCareTeamDB.insertHealthCareTeam(HealthCareTeam))
      .then((healthCareTeam) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: "success inserting health care team",
          message: `Se han creado el profesional de la salud ${HealthCareTeam.document} correctamente`,
          data: healthCareTeam,
        })
      )
      .catch((error) => {
        cryptedResponse(res, 500, {
          ok: false,
          status: "unsuccess inserting health care team",
          message: `Ha ocurrido un error inesperado con el profesional de la salud ${HealthCareTeam.document}`,
          data: error.toString(),
        });
      });
  }
  async updateHealthCareTeam(req: Request, res: Response) {
    const { document } = req.params;
    const { HealthCareTeam } = await decryptRequest(req);
    await db
      .none(() =>
        healthCareTeamDB.updateHealthCareTeam(document, HealthCareTeam)
      )
      .then((healthCareTeam) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: "success updating health care team",
          message: `Se han actualizado el profesional de la salud ${HealthCareTeam.document} correctamente`,
          data: healthCareTeam,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: "unsuccess updating health care team",
          message: `Ha ocurrido un error inesperado al actualizar el profesional de la salud ${document}`,
          data: error.toString(),
        })
      );
  }
  async deleteHealthCareTeam(req: Request, res: Response) {
    const { document } = req.params;
    await db
      .result(() => healthCareTeamDB.deleteHealthCareTeam(document))
      .then((healthCareTeam) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: "success deleting health care team",
          message: `Se han eliminado el profesional de la salud ${document} correctamente`,
          data: healthCareTeam,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: "unsuccess deleting health care team",
          message: `Ha ocurrido un error inesperado al eliminar el profesional de la salud ${document} correctamente`,
          data: error.toString(),
        })
      );
  }
}
