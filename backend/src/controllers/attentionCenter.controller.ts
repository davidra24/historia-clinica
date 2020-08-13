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
          status: "success getting all attention centers",
          message:
            "Se han obtenido todos los centros de atencion de la base de datos",
          data: centrosDeAtencion,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: "unsuccess getting all attention centers",
          message: `Ha ocurrido un error inesperado al obtener todos los centros de atencion`,
          data: error.message.toString(),
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
          status: "success getting one attention center",
          message: `Se ha obtenido el centro de atencion ${id}, ${document}`,
          data: centroDeAtencion,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: "unsuccess getting one attention center",
          message: `Ha ocurrido un error inesperado al obtener el centro de atencion ${id}, ${document}`,
          data: error.message,
        })
      );
  }
  async insertAttentionCenter(req: Request, res: Response) {
    const { AttentionCenter } = await decryptRequest(req);
    await db
      .none(() => attentionCenterDB.insertAttentionCenter(AttentionCenter))
      .then((centrosDeAtencion) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: "success inserting attention center",
          message: `Se ha creado el centro de atencion ${AttentionCenter.id}, ${AttentionCenter.document} correctamente`,
          data: centrosDeAtencion,
        })
      )
      .catch((error) => {
        cryptedResponse(res, 500, {
          ok: false,
          status: "unsuccess inserting attention center",
          message: `Ha ocurrido un error inesperado el centro de atencion ${AttentionCenter.id}, ${AttentionCenter.document}`,
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
          status: "success updating attention center",
          message: `Se ha actualizado el centro de atencion ${attentionCenter.id}, ${attentionCenter.document} correctamente`,
          data: centroDeAtencion,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: "unsuccess updating attention center",
          message: `Ha ocurrido un error inesperado al actualizar el centro de atencion ${idCenter}, ${document}`,
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
          status: "success deleting attention center",
          message: `Se ha eliminado el centro de atencion ${id}, ${document} correctamente`,
          data: centroDeAtencion,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: "unsuccess deleting attention center",
          message: `Ha ocurrido un error inesperado al eliminar el centro de atencion ${id}, ${document}`,
          data: error.toString(),
        })
      );
  }
}
