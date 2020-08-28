import { ContactModel } from '../models/Contact';

const TABLE_NAME = 'CONTACTS';
const COL_DOCUMENT = 'document';
const COL_NAME = 'name';
const COL_PHONE = 'phone';
const COL_EMAIL = 'email';
const COL_DIRECTION = 'direction';
export default {
  createTable: (): string => `CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (${COL_DOCUMENT} TEXT PRIMARY KEY NOT NULL, 
        ${COL_NAME} TEXT NOT NULL, ${COL_PHONE} TEXT NOT NULL, ${COL_EMAIL} TEXT, ${COL_DIRECTION} TEXT)`,
  getAllContacts: (): string => `SELECT * FROM ${TABLE_NAME}`,
  getOneContact: (document: string): string =>
    `SELECT * FROM ${TABLE_NAME} WHERE ${COL_DOCUMENT} = '${document}'`,
  insertContact: (
    contact: ContactModel
  ): string => `INSERT INTO ${TABLE_NAME} (${COL_DOCUMENT}, ${COL_NAME}, ${COL_PHONE}, ${COL_EMAIL},${COL_DIRECTION}) 
          VALUES ('${contact.document}', '${contact.name}','${contact.phone}','${contact.email}','${contact.direction}')`,
  deleteContact: (document: string) =>
    `DELETE FROM ${TABLE_NAME} where ${COL_DOCUMENT} = '${document}'`,
  updateContact: (
    document: string,
    contact: ContactModel
  ) => `UPDATE ${TABLE_NAME} SET ${COL_NAME} = '${contact.name}',${COL_PHONE} = '${contact.phone}',${COL_EMAIL}='${contact.email}',
        ${COL_DIRECTION}='${contact.direction}' WHERE ${COL_DOCUMENT} = '${document}'`,
};
