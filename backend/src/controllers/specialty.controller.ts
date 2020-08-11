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
          status: "success getting all specialties",
          message:
            "Se han obtenido todas las especialidades de la base de datos",
          data: Specialties,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: "unsuccess getting all specialties",
          message: `Ha ocurrido un error inesperado al obtener todas las especialidades`,
          data: error.message.toString(),
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
          status: "success getting one specialty",
          message: `Se ha obtenido la especialidad ${id}`,
          data: specialty,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: "unsuccess getting one specialty",
          message: `Ha ocurrido un error inesperado al obtener la especialidad ${id}`,
          data: error.message,
        })
      );
  }
  async insertSpecialty(req: Request, res: Response) {
    const { Specialty } = await decryptRequest(req);
    await db
      .none(() => specialtyDB.insertSpecialty(Specialty))
      .then((specialty) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: "success inserting specialty",
          message: `Se ha creado la especialidad ${Specialty.id} correctamente`,
          data: specialty,
        })
      )
      .catch((error) => {
        cryptedResponse(res, 500, {
          ok: false,
          status: "unsuccess inserting specialty",
          message: `Ha ocurrido un error inesperado con la especialidad ${Specialty.id}`,
          data: error.toString(),
        });
      });
  }
  async updateSpecialty(req: Request, res: Response) {
    const { id } = req.params;
    const { Specialty } = await decryptRequest(req);
    await db
      .none(() => specialtyDB.updateSpecialty(id, Specialty))
      .then((specialty) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: "success updating specialty",
          message: `Se ha actualizado la especialidad ${Specialty.id} correctamente`,
          data: specialty,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: "unsuccess updating specialty",
          message: `Ha ocurrido un error inesperado al actualizar la especialidad ${id}`,
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
          status: "success deleting specialty",
          message: `Se ha eliminado la especialidad ${id} correctamente`,
          data: specialty,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: "unsuccess deleting specialty",
          message: `Ha ocurrido un error inesperado al eliminar la especialidad ${id} correctamente`,
          data: error.toString(),
        })
      );
  }
}
