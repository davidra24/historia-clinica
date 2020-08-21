import express, { Request, Response } from "express";
import { db } from "../database";
import professionDB from "../database/Professions.database";
import { cryptedResponse, decryptRequest } from "src/util/cryptedConnection";

export class ProfessionController {
  app = express();
  constructor() {
    this.createTable();
  }
  async createTable() {
    await db
      .none(professionDB.createTable)
      .then(() => ({
        ok: true,
        status: "success creating table",
        message: "profession table created",
        data: null,
      }))
      .catch((error) => ({
        ok: false,
        status: "unsuccess creating table",
        message: error,
        data: null,
      }));
  }
  async getProfessions(req: Request, res: Response) {
    await db
      .any(professionDB.getAllProfessions)
      .then((profesions) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 200,
          message: 'getProfessions.success',
          data: profesions,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'getProfessions.error',
          data: error.toString(),
        })
      );
  }
  async getOneProfession(req: Request, res: Response) {
    const { id } = req.params;
    await db
      .one(() => professionDB.getOneProfession(id))
      .then((profesion) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 200,
          message: 'getProfession.success',
          data: profesion,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'getProfession.error',
          data: error.toString,
        })
      );
  }
  async insertProfession(req: Request, res: Response) {
    const { profession } = await decryptRequest(req);
    await db
      .none(() => professionDB.insertProfession(profession))
      .then((profesion) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 200,
          message: 'insertProfession.success',
          data: profesion,
        })
      )
      .catch((error) => {
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'insertProfession.error',
          data: error.toString(),
        });
      });
  }
  async updateProfession(req: Request, res: Response) {
    const { id } = req.params;
    const { profession } = await decryptRequest(req);
    await db
      .none(() => professionDB.updateProfession(id, profession))
      .then((profesion) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 200,
          message: 'updateProfession.success',
          data: profesion,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'updateProfession.error',
          data: error.toString(),
        })
      );
  }
  async deleteProfession(req: Request, res: Response) {
    const { id } = req.params;
    await db
      .result(() => professionDB.deleteProfession(id))
      .then((profesion) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 200,
          message: 'deleteProfession.success',
          data: profesion,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: "unsuccess deleting profession",
          message: 'deleteProfession.error',
          data: error.toString(),
        })
      );
  }
}
