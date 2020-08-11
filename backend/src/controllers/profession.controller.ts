import express, { Request, Response } from 'express';
import { db } from '../database';
import professionDB from '../database/Professions.database';
import { cryptedResponse, decryptRequest } from 'src/util/cryptedConnection';

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
        status: 'success creating table',
        message: 'profession table created',
        data: null,
      }))
      .catch((error) => ({
        ok: false,
        status: 'unsuccess creating table',
        message: error,
        data: null,
      }));
  }
  async getProfessions(req: Request, res: Response) {
    await db
      .any(professionDB.getAllProfessions)
      .then((professions) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 'success getting all professions',
          message: 'Se han obtenido todas las profesiones de la base de datos',
          data: professions,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 'unsuccess getting all professions',
          message: `Ha ocurrido un error inesperado al obtener todas las profesiones`,
          data: error.message.toString(),
        })
      );
  }
  async getOneProfession(req: Request, res: Response) {
    const { id } = req.params;
    await db
      .one(() => professionDB.getOneProfession(id))
      .then((profession) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 'success getting one profession',
          message: `Se ha obtenido la profesion ${id}`,
          data: profession,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 'unsuccess getting one profession',
          message: `Ha ocurrido un error inesperado al obtener la profesion ${id}`,
          data: error.message,
        })
      );
  }
  async insertProfession(req: Request, res: Response) {
    const { Profession } = await decryptRequest(req);
    await db
      .none(() => professionDB.insertProfession(Profession))
      .then((profession) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 'success inserting profession',
          message: `Se ha creado la profesion ${Profession.id} correctamente`,
          data: profession,
        })
      )
      .catch((error) => {
        cryptedResponse(res, 500, {
          ok: false,
          status: 'unsuccess inserting profession',
          message: `Ha ocurrido un error inesperado con la profesion ${Profession.id}`,
          data: error.toString(),
        });
      });
  }
  async updateProfession(req: Request, res: Response) {
    const { id } = req.params;
    const { Profession } = await decryptRequest(req);
    await db
      .none(() => professionDB.updateProfession(id, Profession))
      .then((profession) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 'success updating profession',
          message: `Se ha actualizado la profesion ${Profession.id} correctamente`,
          data: profession,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 'unsuccess updating profession',
          message: `Ha ocurrido un error inesperado al actualizar la profesion ${id}`,
          data: error.toString(),
        })
      );
  }
  async deleteProfession(req: Request, res: Response) {
    const { id } = req.params;
    await db
      .result(() => professionDB.deleteProfession(id))
      .then((profession) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 'success deleting profession',
          message: `Se ha eliminado la profesion ${id} correctamente`,
          data: profession,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 'unsuccess deleting profession',
          message: `Ha ocurrido un error inesperado al eliminar la profesion ${id} correctamente`,
          data: error.toString(),
        })
      );
  }
}
