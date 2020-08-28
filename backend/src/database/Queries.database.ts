import { QueryModel } from '../models/Query';

const TABLE_NAME = 'QUERIES';
const COL_ID = 'id';
const COL_DATE = 'date';
const COL_USER_DOCUMENT = 'document';
const COL_ID_CENTER = 'id_center';
const COL_PROFESSIONAL_DOCUMENT = 'professional_document';
const COL_ANNOTATION = 'annotation';

const FOREIGN_KEY_PEOPLE = 'cons_fk_docper';
const FOREIGN_KEY_ATTENTIONCENTERS = 'con_fk_idac';

const FOREIGN_TABLE_PEOPLE = 'PEOPLE';
const FOREIGN_TABLE_ATTENTIONCENTERS = 'ATTENTIONCENTERS';

const COL_FK_PEOPLE = 'document';
const COL_FK_CENTER_ATTENTIONCENTERS = 'id';
const COL_FK_PROFESSIONAL_ATTENTIONCENTERS = 'document';

const VIEW_QUERY = 'QUERY_VIEW';
const TABLE_PEOPLE = 'PEOPLE';
const TABLE_SPECIALTIES = 'SPECIALTIES';
const TABLE_ATTENTIONCENTERS = 'ATTENTIONCENTERS';
const TABLE_HEALTHCENTERS = 'HEALTHCENTERS';
const TABLE_PROFESSIONAL = 'medicalProfessional';
const COL_HEALTHCENTER_PARAMETER = 'id';
const COL_ATTENTIONCENTER_PARAMETER_SPECIALTY = 'id_specialty';
const COL_ATTENTIONCENTER_PARAMETER_ID_CENTER = 'id';
const COL_ATTENTIONCENTER_PARAMETER_DOCUMENT = 'document';
const COL_SPECIALTY_PARAMETER = 'id';
const COL_PERSON_PARAMETER = 'document';

const COL_HEALTHCENTER_NAME = 'name';
const COL_SPECIALTY_NAME = 'name';
const COL_PEOPLE_FIRST_NAME = 'first_name';
const COL_PEOPLE_SECOND_NAME = 'second_name';
const COL_PEOPLE_LASTNAME = 'last_name';
const COL_PEOPLE_LAST_SECOND_NAME = 'last_second_name';
const COL_PEOPLE_PHONE = 'phone';

export default {
  createTable: (): string => `CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (${COL_ID} UUID PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(), 
    ${COL_DATE} DATE NOT NULL, ${COL_USER_DOCUMENT} TEXT NOT NULL, ${COL_ID_CENTER} TEXT NOT NULL, 
    ${COL_PROFESSIONAL_DOCUMENT} TEXT NOT NULL, ${COL_ANNOTATION} TEXT NOT NULL,
    CONSTRAINT ${FOREIGN_KEY_ATTENTIONCENTERS} FOREIGN KEY (${COL_ID_CENTER}, ${COL_PROFESSIONAL_DOCUMENT}) REFERENCES ${FOREIGN_TABLE_ATTENTIONCENTERS}(${COL_FK_CENTER_ATTENTIONCENTERS}, ${COL_FK_PROFESSIONAL_ATTENTIONCENTERS}),
    CONSTRAINT ${FOREIGN_KEY_PEOPLE} FOREIGN KEY (${COL_USER_DOCUMENT}) REFERENCES ${FOREIGN_TABLE_PEOPLE}(${COL_FK_PEOPLE}))`,
  getAllQueries: (): string => `SELECT * FROM ${TABLE_NAME}`,
  getOneQuery: (id: string): string =>
    `SELECT * FROM ${TABLE_NAME} WHERE ${COL_ID} = '${id}'`,
  insertQuery: (
    query: QueryModel
  ): string => `INSERT INTO ${TABLE_NAME} (${COL_DATE}, ${COL_USER_DOCUMENT}, ${COL_ID_CENTER}, ${COL_PROFESSIONAL_DOCUMENT}, ${COL_ANNOTATION}) 
    VALUES ('${query.date}','${query.document}','${query.id_center}','${query.professional_document}','${query.annotation}') RETURNING ${COL_ID}`,
  deleteQuery: (id: string) =>
    `DELETE FROM ${TABLE_NAME} where ${COL_ID} = '${id}'`,
  updateQuery: (
    id: string,
    query: QueryModel
  ) => `UPDATE ${TABLE_NAME} SET ${COL_DATE} = '${query.date}',${COL_USER_DOCUMENT}='${query.document}', ${COL_ID_CENTER}=${query.id_center},
           ${COL_PROFESSIONAL_DOCUMENT} = '${query.professional_document}', ${COL_ANNOTATION}='${query.annotation}' WHERE ${COL_ID} = '${id}'`,
  createView: (): string => `CREATE OR REPLACE VIEW ${VIEW_QUERY} AS SELECT 
          ${TABLE_NAME}.${COL_ID} as id_query, ${TABLE_NAME}.${COL_USER_DOCUMENT} as pacient_document,
          ${TABLE_NAME}.${COL_DATE} as query_date, ${TABLE_PEOPLE}.${COL_PEOPLE_FIRST_NAME} as pacient_first_name, 
          ${TABLE_PEOPLE}.${COL_PEOPLE_SECOND_NAME} as pacient_second_name,
          ${TABLE_PEOPLE}.${COL_PEOPLE_LASTNAME} as pacient_lastname, 
          ${TABLE_PEOPLE}.${COL_PEOPLE_LAST_SECOND_NAME} as pacient_last_second_name, 
          ${TABLE_PEOPLE}.${COL_PEOPLE_PHONE} as pacient_phone,
          ${TABLE_HEALTHCENTERS}.${COL_HEALTHCENTER_NAME} as name_center, 
          ${TABLE_PROFESSIONAL}.${COL_PEOPLE_FIRST_NAME} as professional_first_name, 
          ${TABLE_PROFESSIONAL}.${COL_PEOPLE_SECOND_NAME} as professional_second_name, 
          ${TABLE_PROFESSIONAL}.${COL_PEOPLE_LASTNAME} as professional_lastname, 
          ${TABLE_PROFESSIONAL}.${COL_PEOPLE_LAST_SECOND_NAME} as professional_last_second_name, 
          ${TABLE_SPECIALTIES}.${COL_SPECIALTY_NAME} as specialty_name, 
          ${TABLE_NAME}.${COL_ANNOTATION} as query_annotation
           FROM ${TABLE_NAME} JOIN ${TABLE_PEOPLE} ON 
           (${TABLE_NAME}.${COL_USER_DOCUMENT}=${TABLE_PEOPLE}.${COL_PERSON_PARAMETER})
           JOIN ${TABLE_PEOPLE} as ${TABLE_PROFESSIONAL} ON
           (${TABLE_NAME}.${COL_PROFESSIONAL_DOCUMENT}=${TABLE_PROFESSIONAL}.${COL_PERSON_PARAMETER})
           JOIN ${TABLE_HEALTHCENTERS} ON 
           (${TABLE_NAME}.${COL_ID_CENTER}=${TABLE_HEALTHCENTERS}.${COL_HEALTHCENTER_PARAMETER})
           JOIN ${TABLE_ATTENTIONCENTERS} ON 
           (${TABLE_NAME}.${COL_ID_CENTER}=${TABLE_ATTENTIONCENTERS}.${COL_ATTENTIONCENTER_PARAMETER_ID_CENTER} AND ${TABLE_NAME}.${COL_PROFESSIONAL_DOCUMENT}=${TABLE_ATTENTIONCENTERS}.${COL_ATTENTIONCENTER_PARAMETER_DOCUMENT})
           JOIN ${TABLE_SPECIALTIES} ON
           (${TABLE_ATTENTIONCENTERS}.${COL_ATTENTIONCENTER_PARAMETER_SPECIALTY}=${TABLE_SPECIALTIES}.${COL_SPECIALTY_PARAMETER})`,
  selectFormView: (id: string): string =>
    `SELECT * FROM ${VIEW_QUERY} WHERE id_query = '${id}'`,
};
