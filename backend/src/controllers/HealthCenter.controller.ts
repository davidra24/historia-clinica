import express, { Request, Response } from "express";
import { db } from "../database";
import healthCenterDB from "../database/HealthCenters.database";
import { cryptedResponse, decryptRequest } from "src/util/cryptedConnection";

export class HealthCenterController {
  app = express();
  constructor() {
    this.createTable();
  }
  async createTable() {
    await db
      .none(healthCenterDB.createTable)
      .then(() => ({
        ok: true,
        status: "success creating table",
        message: "health center table created",
        data: null,
      }))
      .catch((error) => ({
        ok: false,
        status: "unsuccess creating table",
        message: error,
        data: null,
      }));
  }
  async getHealthCenters(req: Request, res: Response) {
    await db
      .any(healthCenterDB.getAllHealthCenters)
      .then((healthCenter) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 200,
          message:'getHealthCenters.success',
          data: healthCenter,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'getHealthCenters.error',
          data: error.toString(),
        })
      );
  }
  async getOneHealthCenter(req: Request, res: Response) {
    const { idCenter } = req.params;
    await db
      .one(() => healthCenterDB.getOneHealthCenter(idCenter))
      .then((healthCenter) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 200,
          message: 'getHealthCenter.success',
          data: healthCenter,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'getHealthCenter.error',
          data: error.toString(),
        })
      );
  }
  async insertHealthCenter(req: Request, res: Response) {
    const { healthCenter } = await decryptRequest(req);
    await db
      .none(() => healthCenterDB.insertHealthCenter(healthCenter))
      .then((Center) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 200,
          message: 'insertHealthCenter.success',
          data: Center,
        })
      )
      .catch((error) => {
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'insertHealthCenter.error',
          data: error.toString(),
        });
      });
  }
  async updateHealthCenter(req: Request, res: Response) {
    const { idCenter } = req.params;
    const { healthCenter } = await decryptRequest(req);
    await db
      .none(() => healthCenterDB.updateHealthCenter(idCenter, healthCenter))
      .then((Center) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 200,
          message: 'updateHealthCenter.success',
          data: Center,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'updateHealthCenter.error',
          data: error.toString(),
        })
      );
  }
  async deleteHealthCenter(req: Request, res: Response) {
    const { idCenter } = req.params;
    await db
      .result(() => healthCenterDB.deleteHealthCenter(idCenter))
      .then((healthCenter) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 200,
          message: 'deleteHealthCenter.success',
          data: healthCenter,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'deleteHealthCenter.error',
          data: error.toString(),
        })
      );
  }
}
