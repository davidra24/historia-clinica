import express, { Request, Response } from 'express';
import { db } from '../database';
import EPSDB from '../database/EPS.database';
import { cryptedResponse, decryptRequest } from '../util/cryptedConnection';

export class EPSController {
  app = express();
  constructor() {
    this.createTable();
  }
  async createTable() {
    await db
      .none(EPSDB.createTable)
      .then(() => ({
        ok: true,
        status: 'success creating table',
        message: 'EPS table created',
        data: null,
      }))
      .catch((error) => ({
        ok: false,
        status: 'unsuccess creating table',
        message: error,
        data: null,
      }));
  }
  async getEPS(req: Request, res: Response) {
    await db
      .any(EPSDB.getAllEPS)
      .then((eps) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 200,
          message: 'getEPS.success',
          data: eps,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'getEPS.error',
          data: error.toString(),
        })
      );
  }
  async getOneEPS(req: Request, res: Response) {
    const { id } = req.params;
    await db
      .one(() => EPSDB.getOneEPS(id))
      .then((eps) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 200,
          message: 'getOneEPS.success',
          data: eps,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'getOneEPS.error',
          data: error.toString(),
        })
      );
  }
  async insertEPS(req: Request, res: Response) {
    const { EPS } = await decryptRequest(req);
    await db
      .none(() => EPSDB.insertEPS(EPS))
      .then((eps) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 200,
          message: 'insertEPS.success',
          data: eps,
        })
      )
      .catch((error) => {
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'insertEPS.error',
          data: error.toString(),
        });
      });
  }
  async updateEPS(req: Request, res: Response) {
    const { id } = req.params;
    const { EPS } = await decryptRequest(req);
    await db
      .none(() => EPSDB.updateEPS(id, EPS))
      .then((eps) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 200,
          message: 'updateEPS.success',
          data: eps,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'updateEPS.error',
          data: error.toString(),
        })
      );
  }
  async deleteEPS(req: Request, res: Response) {
    const { id } = req.params;
    await db
      .result(() => EPSDB.deleteEPS(id))
      .then((eps) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 200,
          message: 'deleteEPS.success',
          data: eps,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'deleteEPS.error',
          data: error.toString(),
        })
      );
  }
}
