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
        data: null,
      }));
  }
  async getPeople(req: Request, res: Response) {
    await db
      .any(peopleDB.getAllPeople)
      .then((person) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 200,
          message: 'getPeople.success',
          data: person,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'getPeople.error',
          data: error.toString(),
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
          status: 200,
          message: 'getPerson.success',
          data: person,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'getPerson.error',
          data: error.toString(),
        })
      );
  }
  async insertPerson(req: Request, res: Response) {
    const { person } = await decryptRequest(req);
    await db
      .none(() => peopleDB.insertPerson(person))
      .then((persona) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 200,
          message: 'insertPerson.success',
          data: persona,
        })
      )
      .catch((error) => {
        console.log('error', error);
        return cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'insertPerson.error',
          data: error.toString(),
        });
      });
  }
  async updatePerson(req: Request, res: Response) {
    const { document } = req.params;
    const { person } = await decryptRequest(req);
    await db
      .none(() => peopleDB.updatePerson(document, person))
      .then((persona) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 200,
          message: 'updatePerson.success',
          data: persona,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'updatePerson.error',
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
          status: 200,
          message: 'deletePerson.success',
          data: person,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'deletePerson.error',
          data: error.toString(),
        })
      );
  }
}
