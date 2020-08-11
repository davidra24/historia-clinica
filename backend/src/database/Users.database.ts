import { UserModel } from 'src/models/User';
import { hashSync } from 'bcrypt';
import { SALT } from '../util/constants';

const TABLE_NAME = 'USERS';
const COL_DOCUMENT = 'document';
const COL_DOCUMENT_TYPE = 'document_type';
const COL_PASSWORD = 'password';
const COL_ACTIVE = 'active';

export default {
  createTable: (): string => `CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (${COL_DOCUMENT} TEXT PRIMARY KEY NOT NULL, 
        ${COL_DOCUMENT_TYPE} BOOLEAN NOT NULL, ${COL_PASSWORD} TEXT NOT NULL, ${COL_ACTIVE} BOOLEAN NOT NULL)`,
  getAllUsers: (): string => `SELECT * FROM ${TABLE_NAME}`,
  getOneUser: (document: string): string =>
    `SELECT * FROM ${TABLE_NAME} WHERE ${COL_DOCUMENT} = '${document}'`,
  insertUser: (user: UserModel): string => {
    console.log('user', user);
    const password = hashSync(user.password.toString(), SALT);
    return `INSERT INTO ${TABLE_NAME} (${COL_DOCUMENT}, ${COL_DOCUMENT_TYPE}, ${COL_PASSWORD}, ${COL_ACTIVE}) 
            VALUES ('${user.document}', ${user.documentType}, '${password}', ${user.active})`;
  },
  deleteUser: (document: string) =>
    `DELETE FROM ${TABLE_NAME} where ${COL_DOCUMENT} = '${document}'`,
  updateUser: (document: string, user: UserModel) => {
    const password = hashSync(user.password, SALT);
    return `UPDATE ${TABLE_NAME} SET ${COL_DOCUMENT_TYPE} = '${user.documentType}', ${COL_PASSWORD} = '${password}',
           ${COL_ACTIVE} = ${user.active} WHERE ${COL_DOCUMENT} = '${document}'`;
  },
};
