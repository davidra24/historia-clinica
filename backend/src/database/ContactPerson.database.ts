import { ContactPersonModel } from "src/models/ContactPerson";

const TABLE_NAME = "CONTACT_PERSON";
const COL_USER_DOCUMENT = "user_document";
const COL_CONTACT_DOCUMENT = "contact_document";

const FOREIGN_KEY_PEOPLE = "con_fk_doc";
const FOREIGN_KEY_CONTACTS = "con_fk_idc";

const FOREIGN_TABLE_PEOPLE = "PEOPLE";
const FOREIGN_TABLE_CONTACTS = "CONTACTS";

const COL_FK_PEOPLE = "document";
const COL_FK_CONTACTS = "document";

export default {
  createTable: (): string => `CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (${COL_USER_DOCUMENT} TEXT NOT NULL, 
    ${COL_CONTACT_DOCUMENT} TEXT NOT NULL, PRIMARY KEY (${COL_USER_DOCUMENT}, ${COL_CONTACT_DOCUMENT}),
    CONSTRAINT ${FOREIGN_KEY_PEOPLE} FOREIGN KEY (${COL_USER_DOCUMENT}) REFERENCES ${FOREIGN_TABLE_PEOPLE}(${COL_FK_PEOPLE}),
    CONSTRAINT ${FOREIGN_KEY_CONTACTS} FOREIGN KEY (${COL_CONTACT_DOCUMENT}) REFERENCES ${FOREIGN_TABLE_CONTACTS}(${COL_FK_CONTACTS}))`,
  getAllContactPersons: (): string => `SELECT * FROM ${TABLE_NAME}`,
  getOneContactPerson: (
    userDocument: string,
    contactDocument: string
  ): string =>
    `SELECT * FROM ${TABLE_NAME} WHERE ${COL_USER_DOCUMENT} = '${userDocument}' AND ${COL_CONTACT_DOCUMENT}= '${contactDocument}'`,
  insertContactPerson: (
    contactPerson: ContactPersonModel
  ): string => `INSERT INTO ${TABLE_NAME} (${COL_USER_DOCUMENT}, ${COL_CONTACT_DOCUMENT}) 
    VALUES ('${contactPerson.user_document}', '${contactPerson.contact_document}')`,
  deleteContactPerson: (userDocument: string, contactDocument: string) =>
    `DELETE FROM ${TABLE_NAME} where ${COL_USER_DOCUMENT} = '${userDocument}' AND ${COL_CONTACT_DOCUMENT}='${contactDocument}'`,
  updateContactPerson: (
    userDocument: string,
    contactDocument: string,
    contactPerson: ContactPersonModel
  ) =>
    `UPDATE ${TABLE_NAME} SET WHERE ${COL_USER_DOCUMENT} = '${userDocument}' AND ${COL_CONTACT_DOCUMENT}='${contactDocument}'`,
};
