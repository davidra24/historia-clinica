import { QueryModel } from "src/models/Query";

const TABLE_NAME = "QUERIES";
const COL_ID = "id";
const COL_DATE = "date";
const COL_USER_DOCUMENT = "user_document";
const COL_ID_CENTER = "id_center";
const COL_PROFESSIONAL_DOCUMENT = "professional_document";
const COL_ANNOTATION = "annotation";

const FOREIGN_KEY_PEOPLE = "cons_fk_docper";
const FOREIGN_KEY_ATTENTIONCENTERS = "con_fk_idac";

const FOREIGN_TABLE_PEOPLE = "PEOPLE";
const FOREIGN_TABLE_ATTENTIONCENTERS = "ATTENTIONCENTERS";

const COL_FK_PEOPLE = "document";
const COL_FK_CENTER_ATTENTIONCENTERS = "id";
const COL_FK_PROFESSIONAL_ATTENTIONCENTERS = "document";

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
    VALUES (${query.date},'${query.document}',${query.idCenter},'${query.professionalDocument}','${query.annotation}')`,
  deleteQuery: (id: string) =>
    `DELETE FROM ${TABLE_NAME} where ${COL_ID} = '${id}'`,
  updateQuery: (
    id: string,
    query: QueryModel
  ) => `UPDATE ${TABLE_NAME} SET ${COL_DATE} = ${query.date},${COL_USER_DOCUMENT}='${query.document}', ${COL_ID_CENTER}=${query.idCenter},
           ${COL_PROFESSIONAL_DOCUMENT} = '${query.professionalDocument}', ${COL_ANNOTATION}='${query.annotation}' WHERE ${COL_ID} = '${id}'`,
};
