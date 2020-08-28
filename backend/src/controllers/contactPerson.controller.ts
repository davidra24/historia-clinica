import express, { Request, Response } from 'express';
import { db } from '../database';
import contactPersonDB from '../database/ContactPerson.database';
import { cryptedResponse, decryptRequest } from '../util/cryptedConnection';

export class ContactPersonController {
  app = express();
  constructor() {
    this.createTable();
    this.createView();
  }
  async createTable() {
    await db
      .none(contactPersonDB.createTable)
      .then(() => ({
        ok: true,
        status: 'success creating table',
        message: 'contact person table created',
        data: null,
      }))
      .catch((error) => ({
        ok: false,
        status: 'unsuccess creating table',
        message: error,
        data: null,
      }));
  }
  async createView() {
    await db
      .none(contactPersonDB.createViewContactPerson)
      .then(() => ({
        ok: true,
        status: 'success creating view',
        message: 'contact person view created',
        data: null,
      }))
      .catch((error) => ({
        ok: false,
        status: 'unsuccess creating view',
        message: error,
        data: null,
      }));
  }
  async getViewData(req: Request, res: Response) {
    const { idPerson } = req.params;
    await db
      .any(() => contactPersonDB.selectFormView(idPerson))
      .then((contactoPersonas) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 200,
          message: 'getContactsPerson.success',
          data: contactoPersonas,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'getContactsPerson.error',
          data: error.toString(),
        })
      );
  }
  async getContactPerson(req: Request, res: Response) {
    await db
      .any(contactPersonDB.getAllContactPersons)
      .then((contactoPersonas) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 200,
          message: 'getContactsPerson.success',
          data: contactoPersonas,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'getContactsPerson.error',
          data: error.toString(),
        })
      );
  }
  async getOneContactPerson(req: Request, res: Response) {
    const { userDocument, contactDocument } = req.params;
    await db
      .one(() =>
        contactPersonDB.getOneContactPerson(userDocument, contactDocument)
      )
      .then((contactoPersona) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 200,
          message: 'getContactPerson.success',
          data: contactoPersona,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'getContactPerson.error',
          data: error.toString(),
        })
      );
  }
  async insertContactPerson(req: Request, res: Response) {
    const { contactPerson } = await decryptRequest(req);
    await db
      .none(() => contactPersonDB.insertContactPerson(contactPerson))
      .then((contactoPersona) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 200,
          message: 'insertContactPerson.success',
          data: contactoPersona,
        })
      )
      .catch((error) => {
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'insertContactPerson.error',
          data: error.toString(),
        });
      });
  }
  async updateContactPerson(req: Request, res: Response) {
    const { userDocument, contactDocument } = req.params;
    const { contactPerson } = await decryptRequest(req);
    await db
      .none(() =>
        contactPersonDB.updateContactPerson(
          userDocument,
          contactDocument,
          contactPerson
        )
      )
      .then((contactoPersona) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 200,
          message: 'updateContactPerson.success',
          data: contactoPersona,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'updateContactPerson.error',
          data: error.toString(),
        })
      );
  }
  async deleteContactPerson(req: Request, res: Response) {
    const { userDocument } = req.params;
    await db
      .result(() => contactPersonDB.deleteContactPerson(userDocument))
      .then((contactoPersona) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 200,
          message: 'deleteContactPerson.success',
          data: contactoPersona,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'deleteContactPerson.error',
          data: error.toString(),
        })
      );
  }
}
