import express, { Request, Response } from 'express';
import { db } from '../database';
import peopleDB from '../database/People.database';
import { cryptedResponse, decryptRequest } from 'src/util/cryptedConnection';

export class PeopleController {
  app = express();
  constructor() {
    this.createTable();
  }
  async createTable() {
    await db
      .none(peopleDB.createTable)
      .then(() => ({
        ok: true,
        status: 'success creating table',
        message: 'people table created',
        data: null,
      }))
      .catch((error) => ({
        ok: false,
        status: 'unsuccess creating table',
        message: error,
        data: error,
      }));
  }
  async getPeople(req: Request, res: Response) {
    await db
      .any(peopleDB.getAllPeople)
      .then((person) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 'success getting all people',
          message: 'Se han obtenido todas las personas de la base de datos',
          data: person,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 'unsuccess getting all people',
          message: `Ha ocurrido un error inesperado al obtener todas las personas`,
          data: error,
        })
      );
  }
  async getOnePerson(req: Request, res: Response) {
    const { document } = req.params;
    await db
      .one(() => peopleDB.getOnePerson(document))
      .then((person) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 'success getting one person',
          message: `Se han obtenido la persona ${document}`,
          data: person,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 'unsuccess getting one person',
          message: `Ha ocurrido un error inesperado al obtener la persona ${document}`,
          data: error.message,
        })
      );
  }
  async insertPerson(req: Request, res: Response) {
    const { Person } = await decryptRequest(req);
    await db
      .none(() => peopleDB.insertPerson(Person))
      .then((person) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 'success inserting person',
          message: `Se han creado la persona ${Person.document} correctamente`,
          data: person,
        })
      )
      .catch((error) => {
        cryptedResponse(res, 500, {
          ok: false,
          status: 'unsuccess inserting person',
          message: `Ha ocurrido un error inesperado con la persona ${Person.document}`,
          data: error.toString(),
        });
      });
  }
  async updatePerson(req: Request, res: Response) {
    const { document } = req.params;
    const { Person } = await decryptRequest(req);
    await db
      .none(() => peopleDB.updatePerson(document, Person))
      .then((person) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 'success updating person',
          message: `Se han actualizado la persona ${Person.document} correctamente`,
          data: person,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 'unsuccess updating person',
          message: `Ha ocurrido un error inesperado al actualizar la persona ${document}`,
          data: error.toString(),
        })
      );
  }
  async deletePerson(req: Request, res: Response) {
    const { document } = req.params;
    await db
      .result(() => peopleDB.deletePerson(document))
      .then((person) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 'success deleting person',
          message: `Se han eliminado la persona ${document} correctamente`,
          data: person,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 'unsuccess deleting person',
          message: `Ha ocurrido un error inesperado al eliminar la persona ${document} correctamente`,
          data: error.toString(),
        })
      );
  }
}
