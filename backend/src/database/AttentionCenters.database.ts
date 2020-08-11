import { AttentionCenterModel } from "src/models/AttentionCenter";
const TABLE_NAME = "ATTENTIONCENTERS";
const COL_ID_CENTER = "id_center";
const COL_DOCUMENT = "document";
const COL_ID_SPECIALTY = "id_specialty";
const COL_ACTIVE = "active";

const FOREIGN_KEY_HEALTHCARETEAM = "atec_fk_idp";
const FOREIGN_KEY_HEALTHCENTERS = "atec_fk_idc";
const FOREIGN_KEY_SPECIALTIES = "atec_fk_ide";

const FOREIGN_TABLE_HEALTHCARETEAM = "HEALTHCARETEAM";
const FOREIGN_TABLE_HEALTHCENTERS = "HEALTHCENTERS";
const FOREIGN_TABLE_SPECIALTIES = "SPECIALTIES";

const COL_FK_HEALTHCARETEAM = "document";
const COL_FK_HEALTHCENTERS = "id_center";
const COL_FK_SPECIALTIES = "id_specialty";

export default {
  createTable: (): string => `CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (${COL_ID_CENTER} NUMBER PRIMARY KEY NOT NULL, 
    ${COL_DOCUMENT} TEXT PRIMARY KEY NOT NULL, ${COL_ID_SPECIALTY} TEXT NOT NULL, ${COL_ACTIVE} BOOLEAN),
    CONSTRAINT ${FOREIGN_KEY_HEALTHCARETEAM} FOREIGN KEY (${COL_DOCUMENT}), REFERENCES ${FOREIGN_TABLE_HEALTHCARETEAM}(${COL_FK_HEALTHCARETEAM}),
    CONSTRAINT ${FOREIGN_KEY_HEALTHCENTERS} FOREIGN KEY (${COL_ID_CENTER}), REFERENCES ${FOREIGN_TABLE_HEALTHCENTERS}(${COL_FK_HEALTHCENTERS}),
    CONSTRAINT ${FOREIGN_KEY_SPECIALTIES} FOREIGN KEY (${COL_ID_SPECIALTY}), REFERENCES ${FOREIGN_TABLE_SPECIALTIES}(${COL_FK_SPECIALTIES}))`,
  getAllAttentionCenters: (): string => `SELECT * FROM ${TABLE_NAME}`,
  getOneAttentionCenter: (idCenter: number, document: string): string =>
    `SELECT * FROM ${TABLE_NAME} WHERE ${COL_ID_CENTER} = ${idCenter} AND ${COL_DOCUMENT}='${document}'`,
  insertAttentionCenter: (
    attentionCenter: AttentionCenterModel
  ): string => `INSERT INTO ${TABLE_NAME} (${COL_ID_CENTER}, ${COL_DOCUMENT}, ${COL_ID_SPECIALTY},${COL_ACTIVE}) 
      VALUES (${attentionCenter.idCenter}, '${attentionCenter.document}','${attentionCenter.idSpecialty}',${attentionCenter.active})`,
  deleteAttentionCenter: (idCenter: number, document: string) =>
    `DELETE FROM ${TABLE_NAME} where ${COL_ID_CENTER} = ${idCenter} AND ${COL_DOCUMENT}='${document}'`,
  updateAttentionCenter: (
    idCenter: number,
    document: string,
    attentionCenter: AttentionCenterModel
  ) => `UPDATE ${TABLE_NAME} SET ${COL_ID_SPECIALTY} = '${attentionCenter.idSpecialty}',
             ${COL_ACTIVE} = ${attentionCenter.active} WHERE ${COL_ID_CENTER} = ${idCenter} AND ${COL_DOCUMENT}='${document}'`,
};
