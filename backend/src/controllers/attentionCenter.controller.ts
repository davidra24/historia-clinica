import express, { Request, Response } from "express";
import { db } from "../database";
import attentionCenterDB from "../database/AttentionCenters.database";
import { cryptedResponse, decryptRequest } from "src/util/cryptedConnection";

export class AttentionCenterController {
  app = express();
  constructor() {
    this.createTable();
  }
  async createTable() {
    await db
      .none(attentionCenterDB.createTable)
      .then(() => ({
        ok: true,
        status: "success creating table",
        message: "Attention center table created",
        data: null,
      }))
      .catch((error) => ({
        ok: false,
        status: "unsuccess creating table",
        message: error,
        data: null,
      }));
  }
  async getAttentionCenters(req: Request, res: Response) {
    await db
      .any(attentionCenterDB.getAllAttentionCenters)
      .then((centrosDeAtencion) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 200,
          message:
            'getAttentionCenters.success',
          data: centrosDeAtencion,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'getAttentionCenters.error',
          data: error.toString(),
        })
      );
  }
  async getOneAttentionCenter(req: Request, res: Response) {
    const { id, document } = req.params;
    await db
      .one(() => attentionCenterDB.getOneAttentionCenter(id, document))
      .then((centroDeAtencion) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 200,
          message: 'getAttentionCenter.success',
          data: centroDeAtencion,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'getAttentionCenter.error',
          data: error.toString(),
        })
      );
  }
  async insertAttentionCenter(req: Request, res: Response) {
    const { attentionCenter } = await decryptRequest(req);
    await db
      .none(() => attentionCenterDB.insertAttentionCenter(attentionCenter))
      .then((centrosDeAtencion) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 200,
          message: 'insertAttentionCenter.success',
          data: centrosDeAtencion,
        })
      )
      .catch((error) => {
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'insetAttentionCenter.error',
          data: error.toString(),
        });
      });
  }
  async updateAttentionCenter(req: Request, res: Response) {
    const { idCenter, document } = req.params;
    const { attentionCenter } = await decryptRequest(req);
    await db
      .none(() =>
        attentionCenterDB.updateAttentionCenter(
          idCenter,
          document,
          attentionCenter
        )
      )
      .then((centroDeAtencion) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 200,
          message: 'updateAttentionCenter.success',
          data: centroDeAtencion,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'updateAttentionCenter.error',
          data: error.toString(),
        })
      );
  }
  async deleteAttentionCenter(req: Request, res: Response) {
    const { id, document } = req.params;
    await db
      .result(() => attentionCenterDB.deleteAttentionCenter(id, document))
      .then((centroDeAtencion) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 200,
          message: 'deleteAttentionCenter.success',
          data: centroDeAtencion,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'deleteAttentionCenter.error',
          data: error.toString(),
        })
      );
  }
}
