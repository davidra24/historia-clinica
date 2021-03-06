import express, { Request, Response } from 'express';
import { db } from '../database';
import queryDB from '../database/Queries.database';
import { cryptedResponse, decryptRequest } from '../util/cryptedConnection';

export class QueryController {
  app = express();
  constructor() {
    this.createTable();
    this.createView();
  }
  async createTable() {
    await db
      .none(queryDB.createTable)
      .then(() => ({
        ok: true,
        status: 'success creating table',
        message: 'query table created',
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
      .none(queryDB.createView)
      .then(() => ({
        ok: true,
        status: 'success creating view',
        message: 'query view created',
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
    const { id } = req.params;
    await db
      .any(() => queryDB.selectFormView(id))
      .then((people) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 200,
          message: 'getQueries.success',
          data: people,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'getQueries.error',
          data: error.toString(),
        })
      );
  }
  async getQueries(req: Request, res: Response) {
    await db
      .any(queryDB.getAllQueries)
      .then((Queries) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 200,
          message: 'getQueries.success',
          data: Queries,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'getQueries.error',
          data: error.toString(),
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
          status: 200,
          message: 'getQuery.success',
          data: query,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'getQuery.error',
          data: error.toString(),
        })
      );
  }
  async insertQuery(req: Request, res: Response) {
    const { query } = await decryptRequest(req);
    await db
      .one(() => queryDB.insertQuery(query))
      .then(async (result) => {
        const { id } = result;
        cryptedResponse(res, 200, {
          ok: true,
          status: 200,
          message: 'insertQuery.success',
          data: id,
        });
      })
      .catch((error) => {
        return cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'insertQuery.error',
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
          status: 200,
          message: 'updateQuery.success',
          data: consulta,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'updateQuery.error',
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
          status: 200,
          message: 'deleteQuery.success',
          data: query,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'deleteQuery.error',
          data: error.toString(),
        })
      );
  }
}
