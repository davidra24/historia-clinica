import express, { Request, Response } from "express";
import { db } from "../database";
import EPSDB from "../database/EPS.database";
import { cryptedResponse, decryptRequest } from "src/util/cryptedConnection";

export class EPSController {
  app = express();
  constructor() {
    this.createTable();
  }
  async createTable() {
    await db
      .none(EPSDB.createTable)
      .then(() => ({
        ok: true,
        status: "success creating table",
        message: "EPS table created",
        data: null,
      }))
      .catch((error) => ({
        ok: false,
        status: "unsuccess creating table",
        message: error,
        data: null,
      }));
  }
  async getEPS(req: Request, res: Response) {
    await db
      .any(EPSDB.getAllEPS)
      .then((eps) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: "success getting all EPS",
          message: "Se han obtenido todas las EPS de la base de datos",
          data: eps,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: "unsuccess getting all EPS",
          message: `Ha ocurrido un error inesperado al obtener todas las EPS`,
          data: error.message.toString(),
        })
      );
  }
  async getOneEPS(req: Request, res: Response) {
    const { id } = req.params;
    await db
      .one(() => EPSDB.getOneEPS(id))
      .then((eps) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: "success getting one EPS",
          message: `Se ha obtenido la eps ${id}`,
          data: eps,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: "unsuccess getting one EPS",
          message: `Ha ocurrido un error inesperado al obtener la EPS ${id}`,
          data: error.message,
        })
      );
  }
  async insertEPS(req: Request, res: Response) {
    const { EPS } = await decryptRequest(req);
    await db
      .none(() => EPSDB.insertEPS(EPS))
      .then((eps) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: "success inserting EPS",
          message: `Se ha creado la EPS correctamente`,
          data: eps,
        })
      )
      .catch((error) => {
        cryptedResponse(res, 500, {
          ok: false,
          status: "unsuccess inserting EPS",
          message: `Ha ocurrido un error inesperado con la EPS`,
          data: error.toString(),
        });
      });
  }
  async updateEPS(req: Request, res: Response) {
    const { id } = req.params;
    const { EPS } = await decryptRequest(req);
    await db
      .none(() => EPSDB.updateEPS(id, EPS))
      .then((eps) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: "success updating EPS",
          message: `Se ha actualizado la EPS ${EPS.id} correctamente`,
          data: eps,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: "unsuccess updating EPS",
          message: `Ha ocurrido un error inesperado al actualizar la EPS ${id}`,
          data: error.toString(),
        })
      );
  }
  async deleteEPS(req: Request, res: Response) {
    const { id } = req.params;
    await db
      .result(() => EPSDB.deleteEPS(id))
      .then((eps) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: "success deleting EPS",
          message: `Se ha eliminado la EPS ${id} correctamente`,
          data: eps,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: "unsuccess deleting EPS",
          message: `Ha ocurrido un error inesperado al eliminar la EPS ${id} correctamente`,
          data: error.toString(),
        })
      );
  }
}
