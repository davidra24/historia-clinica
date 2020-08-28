import { EPSModel } from '../models/EPS';

const TABLE_NAME = 'EPS';
const COL_ID = 'id';
const COL_NAME = 'name';

export default {
  createTable: (): string =>
    `CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (${COL_ID} UUID PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(), ${COL_NAME} TEXT NOT NULL)`,
  getAllEPS: (): string => `SELECT * FROM ${TABLE_NAME}`,
  getOneEPS: (id: string): string =>
    `SELECT * FROM ${TABLE_NAME} WHERE ${COL_ID} = '${id}'`,
  insertEPS: (
    EPS: EPSModel
  ): string => `INSERT INTO ${TABLE_NAME} ( ${COL_NAME}) 
          VALUES ('${EPS.name}')`,
  deleteEPS: (id: string) =>
    `DELETE FROM ${TABLE_NAME} where ${COL_ID} = '${id}'`,
  updateEPS: (id: string, EPS: EPSModel) =>
    `UPDATE ${TABLE_NAME} SET ${COL_NAME} = '${EPS.name}' WHERE ${COL_ID} = '${id}'`,
};
