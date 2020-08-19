import express, { Request, Response } from "express";
import { db } from "../database";
import patientDB from "../database/Patients.database";
import { cryptedResponse, decryptRequest } from "src/util/cryptedConnection";

export class PatientController {
  app = express();
  constructor() {
    this.createTable();
  }
  async createTable() {
    await db
      .none(patientDB.createTable)
      .then(() => ({
        ok: true,
        status: "success creating table",
        message: "patient table created",
        data: null,
      }))
      .catch((error) => ({
        ok: false,
        status: "unsuccess creating table",
        message: error,
        data: null,
      }));
  }
  async getPatients(req: Request, res: Response) {
    await db
      .any(patientDB.getAllPatients)
      .then((patient) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: "success getting all patients",
          message: "Se han obtenido todos los pacientes de la base de datos",
          data: patient,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: "unsuccess getting all patients",
          message: `Ha ocurrido un error inesperado al obtener todos los pacientes`,
          data: error.message.toString(),
        })
      );
  }
  async getOnePatient(req: Request, res: Response) {
    const { document } = req.params;
    await db
      .one(() => patientDB.getOnePatient(document))
      .then((patient) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: "success getting one patient",
          message: `Se han obtenido el paciente ${document}`,
          data: patient,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: "unsuccess getting one patient",
          message: `Ha ocurrido un error inesperado al obtener el paciente ${document}`,
          data: error.message,
        })
      );
  }
  async insertPatient(req: Request, res: Response) {
    const { patient } = await decryptRequest(req);
    await db
      .none(() => patientDB.insertPatient(patient))
      .then((paciente) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: "success inserting patient",
          message: `Se han creado el paciente ${patient.document} correctamente`,
          data: paciente,
        })
      )
      .catch((error) => {
        cryptedResponse(res, 500, {
          ok: false,
          status: "unsuccess inserting patient",
          message: `Ha ocurrido un error inesperado con el paciente ${patient.document}`,
          data: error.toString(),
        });
      });
  }
  async updatePatient(req: Request, res: Response) {
    const { document } = req.params;
    const { patient } = await decryptRequest(req);
    await db
      .none(() => patientDB.updatePatient(document, patient))
      .then((paciente) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: "success updating patient",
          message: `Se han actualizado el paciente ${patient.document} correctamente`,
          data: paciente,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: "unsuccess updating patient",
          message: `Ha ocurrido un error inesperado al actualizar el paciente ${document}`,
          data: error.toString(),
        })
      );
  }
  async deletePatient(req: Request, res: Response) {
    const { document } = req.params;
    await db
      .result(() => patientDB.deletePatient(document))
      .then((patient) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: "success deleting patient",
          message: `Se han eliminado el paciente ${document} correctamente`,
          data: patient,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: "unsuccess deleting patient",
          message: `Ha ocurrido un error inesperado al eliminar el paciente ${document} correctamente`,
          data: error.toString(),
        })
      );
  }
}
