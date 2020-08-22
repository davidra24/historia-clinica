import express, { Request, Response } from "express";
import { db } from "../database";
import contactDB from "../database/Contacts.database";
import { cryptedResponse, decryptRequest } from "src/util/cryptedConnection";

export class ContactController {
  app = express();
  constructor() {
    this.createTable();
  }
  async createTable() {
    await db
      .none(contactDB.createTable)
      .then(() => ({
        ok: true,
        status: "success creating table",
        message: "Contact table created",
        data: null,
      }))
      .catch((error) => ({
        ok: false,
        status: "unsuccess creating table",
        message: error,
        data: null,
      }));
  }
  async getContacts(req: Request, res: Response) {
    await db
      .any(contactDB.getAllContacts)
      .then((contacto) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 200,
          message: 'getContacts.success',
          data: contacto,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'getContacts.error',
          data: error.toString(),
        })
      );
  }
  async getOneContact(req: Request, res: Response) {
    const { document } = req.params;
    await db
      .one(() => contactDB.getOneContact(document))
      .then((contacto) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 200,
          message: 'getContact.success',
          data: contacto,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'getContact.error',
          data: error.toString(),
        })
      );
  }
  async insertContact(req: Request, res: Response) {
    const { contact } = await decryptRequest(req);
    const contactExist = await db.oneOrNone(contactDB.getOneContact(contact.document));
    if (!contactExist) {
      await db
        .none(() => contactDB.insertContact(contact))
        .then((usuarios) =>
          cryptedResponse(res, 200, {
            ok: true,
            status: 200,
            message: 'insertContact.success',
            data: usuarios,
          })
        )
        .catch((error) => {
          cryptedResponse(res, 500, {
            ok: false,
            status: 500,
            message: 'insertContact.error',
            data: error.toString(),
          });
        });
    } else {
      return cryptedResponse(res, 400, {
        ok: true,
        status: 200,
        message: 'insertContact.success',
        data: null,
      });
    }
  }
  async updateContact(req: Request, res: Response) {
    const { document } = req.params;
    const { contact } = await decryptRequest(req);
    await db
      .none(() => contactDB.updateContact(document, contact))
      .then((contacto) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 200,
          message: 'updateContact.success',
          data: contacto,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'updateContact.error',
          data: error.toString(),
        })
      );
  }
  async deleteContact(req: Request, res: Response) {
    const { document } = req.params;
    await db
      .result(() => contactDB.deleteContact(document))
      .then((contacto) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 200,
          message: 'deleteContact.success',
          data: contacto,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'deleteContact.error',
          data: error.toString(),
        })
      );
  }
}
