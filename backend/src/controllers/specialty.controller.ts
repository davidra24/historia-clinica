import express, { Request, Response } from "express";
import { db } from "../database";
import specialtyDB from "../database/Specialties.database";
import { cryptedResponse, decryptRequest } from "src/util/cryptedConnection";

export class SpecialtyController {
  app = express();
  constructor() {
    this.createTable();
  }
  async createTable() {
    await db
      .none(specialtyDB.createTable)
      .then(() => ({
        ok: true,
        status: "success creating table",
        message: "specialty table created",
        data: null,
      }))
      .catch((error) => ({
        ok: false,
        status: "unsuccess creating table",
        message: error,
        data: null,
      }));
  }
  async getSpecialties(req: Request, res: Response) {
    await db
      .any(specialtyDB.getAllSpecialties)
      .then((Specialties) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 200,
          message:'getSpecialties.success',
          data: Specialties,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'getSpecialties.error',
          data: error.toString(),
        })
      );
  }
  async getOneSpecialty(req: Request, res: Response) {
    const { id } = req.params;
    await db
      .one(() => specialtyDB.getOneSpecialty(id))
      .then((specialty) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 200,
          message: 'getSpecialty.success',
          data: specialty,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'getSpecialty.error',
          data: error.toString(),
        })
      );
  }
  async insertSpecialty(req: Request, res: Response) {
    const { specialty } = await decryptRequest(req);
    await db
      .none(() => specialtyDB.insertSpecialty(specialty))
      .then((especialidad) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 200,
          message: 'insertSpecialty.success',
          data: especialidad,
        })
      )
      .catch((error) => {
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'insertSpecialty.error',
          data: error.toString(),
        });
      });
  }
  async updateSpecialty(req: Request, res: Response) {
    const { id } = req.params;
    const { specialty } = await decryptRequest(req);
    await db
      .none(() => specialtyDB.updateSpecialty(id, specialty))
      .then((especialidad) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 200,
          message: 'updateSpecialty.success',
          data: especialidad,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'updateSpecialty.error',
          data: error.toString(),
        })
      );
  }
  async deleteSpecialty(req: Request, res: Response) {
    const { id } = req.params;
    await db
      .result(() => specialtyDB.deleteSpecialty(id))
      .then((specialty) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 200,
          message: 'deleteSpecialty.success',
          data: specialty,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'deleteSpecialty.error',
          data: error.toString(),
        })
      );
  }
}
