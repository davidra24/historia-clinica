import express, { Request, Response } from "express";
import { db } from "../database";
import queryDB from "../database/Queries.database";
import { cryptedResponse, decryptRequest } from "src/util/cryptedConnection";

export class QueryController {
  app = express();
  constructor() {
    this.createTable();
  }
  async createTable() {
    await db
      .none(queryDB.createTable)
      .then(() => ({
        ok: true,
        status: "success creating table",
        message: "query table created",
        data: null,
      }))
      .catch((error) => ({
        ok: false,
        status: "unsuccess creating table",
        message: error,
        data: null,
      }));
  }
  async getQueries(req: Request, res: Response) {
    await db
      .any(queryDB.getAllQueries)
      .then((Queries) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: "success getting all queries",
          message: "Se han obtenido todas las consultas de la base de datos",
          data: Queries,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: "unsuccess getting all queries",
          message: `Ha ocurrido un error inesperado al obtener todas las consultas`,
          data: error.message.toString(),
        })
      );
  }
  async getOneQuery(req: Request, res: Response) {
    const { id } = req.params;
    await db
      .one(() => queryDB.getOneQuery(id))
      .then((query) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: "success getting one query",
          message: `Se ha obtenido la consulta ${id}`,
          data: query,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: "unsuccess getting one query",
          message: `Ha ocurrido un error inesperado al obtener la consulta ${id}`,
          data: error.message,
        })
      );
  }
  async insertQuery(req: Request, res: Response) {
    const { query } = await decryptRequest(req);
    await db
      .none(() => queryDB.insertQuery(query))
      .then((consulta) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: "success inserting query",
          message: `Se ha creado la consulta correctamente`,
          data: consulta,
        })
      )
      .catch((error) => {
        cryptedResponse(res, 500, {
          ok: false,
          status: "unsuccess inserting query",
          message: `Ha ocurrido un error inesperado con la consulta`,
          data: error.toString(),
        });
      });
  }
  async updateQuery(req: Request, res: Response) {
    const { id } = req.params;
    const { query } = await decryptRequest(req);
    await db
      .none(() => queryDB.updateQuery(id, query))
      .then((consulta) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: "success updating query",
          message: `Se ha actualizado la consulta ${query.id} correctamente`,
          data: consulta,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: "unsuccess updating query",
          message: `Ha ocurrido un error inesperado al actualizar la consulta ${id}`,
          data: error.toString(),
        })
      );
  }
  async deleteQuery(req: Request, res: Response) {
    const { id } = req.params;
    await db
      .result(() => queryDB.deleteQuery(id))
      .then((query) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: "success deleting query",
          message: `Se ha eliminado la consulta ${id} correctamente`,
          data: query,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: "unsuccess deleting query",
          message: `Ha ocurrido un error inesperado al eliminar la consulta ${id} correctamente`,
          data: error.toString(),
        })
      );
  }
}
