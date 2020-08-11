import { PatientModel } from 'src/models/Patient';

const TABLE_NAME = 'PATIENTS';
const COL_DOCUMENT = 'document';
const COL_STRATUM = 'stratum';
const COL_ADDITIONAL_INFORMATION = 'additional_information';
const COL_DECEASED = 'deceased';
const COL_DECEASED_DATE = 'deceaced_date';
const COL_ID_PROFESSION = 'id_profession';

const FOREIGN_KEY_PERSON = 'per_fk_doc';
const FOREIGN_KEY_PROFESSION = 'pac_fk_idp';

const FOREIGN_TABLE_PEOPLE = 'PEOPLE';
const FOREIGN_TABLE_PROFESSION = 'PROFESSIONS';

const COL_FK_PEOPLE = 'document';
const COL_FK_PROFESSION = 'id';

export default {
  createTable: (): string => `CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (${COL_DOCUMENT} TEXT PRIMARY KEY NOT NULL, 
        ${COL_STRATUM} NUMBER NOT NULL, ${COL_ADDITIONAL_INFORMATION} TEXT, ${COL_DECEASED} BOOLEAN, 
        ${COL_DECEASED_DATE} DATE, ${COL_ID_PROFESSION} UUID NOT NULL,  
        CONSTRAINT ${FOREIGN_KEY_PERSON} FOREIGN KEY (${COL_DOCUMENT})  REFERENCES ${FOREIGN_TABLE_PEOPLE}(${COL_FK_PEOPLE}), 
        CONSTRAINT ${FOREIGN_KEY_PROFESSION} FOREIGN KEY (${COL_ID_PROFESSION}) REFERENCES ${FOREIGN_TABLE_PROFESSION}(${COL_FK_PROFESSION}))`,
  getAllPatients: (): string => `SELECT * FROM ${TABLE_NAME}`,
  getOnePatient: (document: string): string =>
    `SELECT * FROM ${TABLE_NAME} WHERE ${COL_DOCUMENT} = '${document}'`,
  insertPatient: (
    patient: PatientModel
  ): string => `INSERT INTO ${TABLE_NAME} (${COL_DOCUMENT}, ${COL_ID_PROFESSION}, ${COL_ADDITIONAL_INFORMATION}, ${COL_STRATUM},${COL_DECEASED},${COL_DECEASED_DATE}) 
    VALUES ('${patient.document}', '${patient.idProfesion}','${patient.additionalInformation}',${patient.stratum},${patient.deceased},${patient.deceasedDate})`,
  deletePatient: (document: string) =>
    `DELETE FROM ${TABLE_NAME} where ${COL_DOCUMENT} = ${document}`,
  updatePatient: (
    document: string,
    patient: PatientModel
  ) => `UPDATE ${TABLE_NAME} SET ${COL_ID_PROFESSION} = '${patient.idProfesion}', ${COL_ADDITIONAL_INFORMATION}='${patient.additionalInformation}',
           ${COL_STRATUM} = ${patient.stratum},${COL_DECEASED}=${patient.deceased},${COL_DECEASED_DATE}=${patient.deceasedDate} WHERE ${COL_DOCUMENT} = '${document}'`,
};
