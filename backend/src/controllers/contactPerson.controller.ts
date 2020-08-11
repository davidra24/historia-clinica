import express, { Request, Response } from "express";
import { db } from "../database";
import contactPersonDB from "../database/ContactPerson.database";
import { cryptedResponse, decryptRequest } from "src/util/cryptedConnection";

export class ContactPersonController {
  app = express();
  constructor() {
    this.createTable();
  }
  async createTable() {
    await db
      .none(contactPersonDB.createTable)
      .then(() => ({
        ok: true,
        status: "success creating table",
        message: "contact person table created",
        data: null,
      }))
      .catch((error) => ({
        ok: false,
        status: "unsuccess creating table",
        message: error,
        data: null,
      }));
  }
  async getContactPerson(req: Request, res: Response) {
    await db
      .any(contactPersonDB.getAllContactPersons)
      .then((contactoPersonas) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: "success getting all contact person",
          message:
            "Se han obtenido todos los contactos de personas de la base de datos",
          data: contactoPersonas,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: "unsuccess getting all contact person",
          message: `Ha ocurrido un error inesperado al obtener todos los contactos de personas`,
          data: error.message.toString(),
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
          status: "success getting one contact person",
          message: `Se ha obtenido el contacto ${contactDocument} de la persona ${userDocument}`,
          data: contactoPersona,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: "unsuccess getting one contact person",
          message: `Ha ocurrido un error inesperado al obtener el contacto ${contactDocument} de la persona ${userDocument}`,
          data: error.message,
        })
      );
  }
  async insertContactPerson(req: Request, res: Response) {
    const { ContactPerson } = await decryptRequest(req);
    await db
      .none(() => contactPersonDB.insertContactPerson(ContactPerson))
      .then((contactoPersona) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: "success inserting contact person",
          message: `Se ha creado el contacto ${ContactPerson.contactDocument} de la persona ${ContactPerson.userDocument} correctamente`,
          data: contactoPersona,
        })
      )
      .catch((error) => {
        cryptedResponse(res, 500, {
          ok: false,
          status: "unsuccess inserting contact person",
          message: `Ha ocurrido un error inesperado con el contacto ${ContactPerson.contactDocument} y/o la persona ${ContactPerson.userDocument}`,
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
          status: "success updating contact person",
          message: `Se ha actualizado el contacto ${contactPerson.contactDocument} de la persona ${contactPerson.userDocument} correctamente`,
          data: contactoPersona,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: "unsuccess updating contact person",
          message: `Ha ocurrido un error inesperado al actualizar el contacto ${contactDocument} de la persona ${userDocument}`,
          data: error.toString(),
        })
      );
  }
  async deleteContactPerson(req: Request, res: Response) {
    const { userDocument, contactDocument } = req.params;
    await db
      .result(() =>
        contactPersonDB.deleteContactPerson(userDocument, contactDocument)
      )
      .then((contactoPersona) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: "success deleting contact person",
          message: `Se ha eliminado el contacto ${contactDocument} de la persona ${userDocument} correctamente`,
          data: contactoPersona,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: "unsuccess deleting contact person",
          message: `Ha ocurrido un error inesperado al eliminar el contacto ${contactDocument} de la persona ${userDocument} correctamente`,
          data: error.toString(),
        })
      );
  }
}
