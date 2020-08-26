import express, { Request, Response } from 'express';
import { db } from '../database';
import generalMedicalFeaturesDB from '../database/GeneralMedicalFeatures.database';
import { cryptedResponse, decryptRequest } from 'src/util/cryptedConnection';

export class GeneralMedicalFeaturesController {
  app = express();
  constructor() {
    this.createTable();
  }
  async createTable() {
    await db
      .none(generalMedicalFeaturesDB.createTable)
      .then(() => ({
        ok: true,
        status: 'success creating table',
        message: 'general medical features table created',
        data: null,
      }))
      .catch((error) => ({
        ok: false,
        status: 'unsuccess creating table',
        message: error,
        data: null,
      }));
  }
  async getGeneralMedicalFeatures(req: Request, res: Response) {
    await db
      .any(generalMedicalFeaturesDB.getAllGeneralMedicalFeatures)
      .then((generalMedicalFeatures) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 200,
          message: 'getGeneralMedicalFeatures.success',
          data: generalMedicalFeatures,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'getGeneralMedicalFeatures.error',
          data: error.toString(),
        })
      );
  }
  async getOneGeneralMedicalFeatures(req: Request, res: Response) {
    const { id } = req.params;
    await db
      .one(() => generalMedicalFeaturesDB.getOneGeneralMedicalFeatures(id))
      .then((generalMedicalFeatures) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 200,
          message: 'getOneGeneralMedicalFeatures.success',
          data: generalMedicalFeatures,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'getOneGeneralMedicalFeatures.error',
          data: error.toString(),
        })
      );
  }
  async insertGeneralMedicalFeatures(req: Request, res: Response) {
    const { generalMedicalFeatures } = await decryptRequest(req);
    await db
      .none(() =>
        generalMedicalFeaturesDB.insertGeneralMedicalFeatures(
          generalMedicalFeatures
        )
      )
      .then((MedicalFeatures) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 200,
          message: 'insertGeneralMedicalFeatures.success',
          data: MedicalFeatures,
        })
      )
      .catch((error) => {
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'insertGeneralMedicalFeatures.error',
          data: error.toString(),
        });
      });
  }
  async updateGeneralMedicalFeatures(req: Request, res: Response) {
    const { id } = req.params;
    const { generalMedicalFeatures } = await decryptRequest(req);
    await db
      .none(() =>
        generalMedicalFeaturesDB.updateGeneralMedicalFeatures(
          id,
          generalMedicalFeatures
        )
      )
      .then((MedicalFeatures) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 200,
          message: 'updateGeneralMedicalFeatures.success',
          data: MedicalFeatures,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'updateGeneralMedicalFeatures.error',
          data: error.toString(),
        })
      );
  }
  async deleteGeneralMedicalFeatures(req: Request, res: Response) {
    const { id } = req.params;
    await db
      .result(() => generalMedicalFeaturesDB.deleteGeneralMedicalFeatures(id))
      .then((generalMedicalFeatures) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 200,
          message: 'deleteGeneralMedicalFeatures.success',
          data: generalMedicalFeatures,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'deleteGeneralMedicalFeatures.error',
          data: error.toString(),
        })
      );
  }
}
