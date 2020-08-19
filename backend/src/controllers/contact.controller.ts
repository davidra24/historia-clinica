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
          status: "success getting all contacts",
          message: "Se han obtenido todos los contactos de la base de datos",
          data: contacto,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: "unsuccess getting all contact",
          message: `Ha ocurrido un error inesperado al obtener todos los contactos`,
          data: error.message.toString(),
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
          status: "success getting one contact",
          message: `Se ha obtenido el contacto ${document}`,
          data: contacto,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: "unsuccess getting one contact",
          message: `Ha ocurrido un error inesperado al obtener el contacto ${document}`,
          data: error.message,
        })
      );
  }
  async insertContact(req: Request, res: Response) {
    const { contact } = await decryptRequest(req);
    await db
      .none(() => contactDB.insertContact(contact))
      .then((contacto) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: "success inserting contact",
          message: `Se ha creado el contacto ${contact.document} correctamente`,
          data: contacto,
        })
      )
      .catch((error) => {
        cryptedResponse(res, 500, {
          ok: false,
          status: "unsuccess inserting contact",
          message: `Ha ocurrido un error inesperado con el contacto ${contact.document}`,
          data: error.toString(),
        });
      });
  }
  async updateContact(req: Request, res: Response) {
    const { document } = req.params;
    const { contact } = await decryptRequest(req);
    await db
      .none(() => contactDB.updateContact(document, contact))
      .then((contacto) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: "success updating contact",
          message: `Se ha actualizado el contacto ${contact.document} correctamente`,
          data: contacto,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: "unsuccess updating contact",
          message: `Ha ocurrido un error inesperado al actualizar el contacto ${document}`,
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
          status: "success deleting contact",
          message: `Se ha eliminado el contacto ${document} correctamente`,
          data: contacto,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: "unsuccess deleting contact",
          message: `Ha ocurrido un error inesperado al eliminar el contacto ${document} correctamente`,
          data: error.toString(),
        })
      );
  }
}
