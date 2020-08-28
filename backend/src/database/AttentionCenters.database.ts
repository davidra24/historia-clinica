import { AttentionCenterModel } from '../models/AttentionCenter';

const TABLE_NAME = 'ATTENTIONCENTERS';
const COL_ID_CENTER = 'id';
const COL_DOCUMENT = 'document';
const COL_ID_SPECIALTY = 'id_specialty';
const COL_ACTIVE = 'active';

const FOREIGN_KEY_PEOPLE = 'atec_fk_idp';
const FOREIGN_KEY_HEALTHCENTERS = 'atec_fk_idc';
const FOREIGN_KEY_SPECIALTIES = 'atec_fk_ide';

const FOREIGN_TABLE_PEOPLE = 'PEOPLE';
const FOREIGN_TABLE_HEALTHCENTERS = 'HEALTHCENTERS';
const FOREIGN_TABLE_SPECIALTIES = 'SPECIALTIES';

const COL_FK_PEOPLE = 'document';
const COL_FK_HEALTHCENTERS = 'id';
const COL_FK_SPECIALTIES = 'id';

const VIEW_ATTENTION_CENTER = 'ATTENTION_CENTER_VIEW';
const TABLE_SPECIALTIES = 'SPECIALTIES ';
const TABLE_PEOPLE = 'PEOPLE';
const TABLE_HEALTH_CENTERS = 'HEALTHCENTERS';
const COL_SPECIALTIES_PARAMETER = 'id';
const COL_PEOPLE_PARAMETER = 'document';
const COL_HEALTHCENTERS_PARAMETER = 'id';

const COL_SPECIALTIES_NAME = 'name';
const COL_SPECIALTIES_DESCRIPTION = 'description';
const COL_PEOPLE_FIRST_NAME = 'first_name';
const COL_PEOPLE_SECOND_NAME = 'second_name';
const COL_PEOPLE_LASTNAME = 'last_name';
const COL_PEOPLE_LAST_SECOND_NAME = 'last_second_name';
const COL_PEOPLE_PHONE = 'phone';
const COL_HEALTHCENTERS_NAME = 'name';

const ID_HEALTH_CENTER = 'id_health_center';
const HEALTH_CENTER_NAME = 'health_center_name';
const ACTIVE_ATTENTION_CENTER = 'active_attention_center';
const SPECIALTY_ID = 'specialty_id';
const SPECIALTY_NAME = 'specialty_name';
const SPECIALTY_DESCRIPTION = 'specialty_description';
const DOCUMENT_HEALTH_PROFESSIONAL = 'document_health_professional';
const HEALTH_PROFESSIONAL_FIRST_NAME = 'health_professional_first_name';
const HEALTH_PROFESSIONAL_SECOND_NAME = 'health_professional_second_name';
const HEALTH_PROFESSIONAL_LAST_NAME = 'health_professional_lastname';
const HEALTH_PROFESSIONAL_LAST_SECOND_NAME =
  'health_professional_last_second_name';
const HEALTH_PROFESSIONAL_PHONE = 'health_professional_phone';

export default {
  createTable: (): string => `CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (${COL_ID_CENTER} TEXT NOT NULL, 
    ${COL_DOCUMENT} TEXT NOT NULL, ${COL_ID_SPECIALTY} UUID NOT NULL, ${COL_ACTIVE} BOOLEAN, PRIMARY KEY(${COL_ID_CENTER},${COL_DOCUMENT}),
    CONSTRAINT ${FOREIGN_KEY_PEOPLE} FOREIGN KEY (${COL_DOCUMENT}) REFERENCES ${FOREIGN_TABLE_PEOPLE}(${COL_FK_PEOPLE}),
    CONSTRAINT ${FOREIGN_KEY_HEALTHCENTERS} FOREIGN KEY (${COL_ID_CENTER}) REFERENCES ${FOREIGN_TABLE_HEALTHCENTERS}(${COL_FK_HEALTHCENTERS}),
    CONSTRAINT ${FOREIGN_KEY_SPECIALTIES} FOREIGN KEY (${COL_ID_SPECIALTY}) REFERENCES ${FOREIGN_TABLE_SPECIALTIES}(${COL_FK_SPECIALTIES}))`,
  getAllAttentionCenters: (): string => `SELECT * FROM ${TABLE_NAME}`,
  getOneAttentionCenter: (id: string, document: string): string =>
    `SELECT * FROM ${TABLE_NAME} WHERE ${COL_ID_CENTER} = '${id}' AND ${COL_DOCUMENT}='${document}'`,
  insertAttentionCenter: (
    attentionCenter: AttentionCenterModel
  ): string => `INSERT INTO ${TABLE_NAME} (${COL_ID_CENTER}, ${COL_DOCUMENT}, ${COL_ID_SPECIALTY},${COL_ACTIVE}) 
      VALUES ('${attentionCenter.id}', '${attentionCenter.document}','${attentionCenter.id_specialty}',${attentionCenter.active})`,
  deleteAttentionCenter: (idCenter: string, document: string) =>
    `DELETE FROM ${TABLE_NAME} where ${COL_ID_CENTER} = '${idCenter}' AND ${COL_DOCUMENT}='${document}'`,
  updateAttentionCenter: (
    id: string,
    document: string,
    attentionCenter: AttentionCenterModel
  ) => `UPDATE ${TABLE_NAME} SET ${COL_ID_SPECIALTY} = '${attentionCenter.id_specialty}',
             ${COL_ACTIVE} = ${attentionCenter.active} WHERE ${COL_ID_CENTER} = '${id}' AND ${COL_DOCUMENT}='${document}'`,
  createViewAttentionCenter: (): string => `CREATE OR REPLACE VIEW ${VIEW_ATTENTION_CENTER} AS SELECT 
  ${TABLE_NAME}.${COL_ID_CENTER} as ${ID_HEALTH_CENTER}, ${TABLE_HEALTH_CENTERS}.${COL_HEALTHCENTERS_NAME} as ${HEALTH_CENTER_NAME},
  ${TABLE_NAME}.${COL_ACTIVE} as ${ACTIVE_ATTENTION_CENTER}, ${TABLE_SPECIALTIES}.${COL_SPECIALTIES_PARAMETER} as ${SPECIALTY_ID}, 
  ${TABLE_SPECIALTIES}.${COL_SPECIALTIES_NAME} as ${SPECIALTY_NAME}, ${TABLE_SPECIALTIES}.${COL_SPECIALTIES_DESCRIPTION} as ${SPECIALTY_DESCRIPTION},
  ${TABLE_PEOPLE}.${COL_PEOPLE_PARAMETER} as ${DOCUMENT_HEALTH_PROFESSIONAL}, ${TABLE_PEOPLE}.${COL_PEOPLE_FIRST_NAME} as ${HEALTH_PROFESSIONAL_FIRST_NAME}, 
  ${TABLE_PEOPLE}.${COL_PEOPLE_SECOND_NAME} as ${HEALTH_PROFESSIONAL_SECOND_NAME}, ${TABLE_PEOPLE}.${COL_PEOPLE_LASTNAME} as ${HEALTH_PROFESSIONAL_LAST_NAME}, 
  ${TABLE_PEOPLE}.${COL_PEOPLE_LAST_SECOND_NAME} as ${HEALTH_PROFESSIONAL_LAST_SECOND_NAME}, 
  ${TABLE_PEOPLE}.${COL_PEOPLE_PHONE} as ${HEALTH_PROFESSIONAL_PHONE} FROM ${TABLE_NAME} JOIN ${TABLE_SPECIALTIES} ON 
  (${TABLE_NAME}.${COL_ID_SPECIALTY}=${TABLE_SPECIALTIES}.${COL_SPECIALTIES_PARAMETER}) JOIN ${TABLE_PEOPLE} ON 
  (${TABLE_NAME}.${COL_DOCUMENT}=${TABLE_PEOPLE}.${COL_PEOPLE_PARAMETER}) JOIN ${TABLE_HEALTH_CENTERS} ON (${TABLE_NAME}.${COL_ID_CENTER}=${TABLE_HEALTH_CENTERS}.${COL_HEALTHCENTERS_PARAMETER})`,
  selectFormViewByHealthCenter: (id: string): string =>
    `SELECT * FROM ${VIEW_ATTENTION_CENTER} WHERE ${ID_HEALTH_CENTER} = '${id}'`,
  selectFormViewByProfessionalDocument: (document: string): string =>
    `SELECT * FROM ${VIEW_ATTENTION_CENTER} WHERE ${DOCUMENT_HEALTH_PROFESSIONAL}='${document}'`,
};
