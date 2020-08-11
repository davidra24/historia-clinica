import { ProfessionModel } from "src/models/Profession";
const TABLE_NAME = "PROFESSIONS";
const COL_ID = "id";
const COL_NAME = "name";

export default {
  createTable: (): string => `CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (${COL_ID} UUID PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(), 
        ${COL_NAME} TEXT NOT NULL)`,
  getAllProfessions: (): string => `SELECT * FROM ${TABLE_NAME}`,
  getOneProfession: (id: string): string =>
    `SELECT * FROM ${TABLE_NAME} WHERE ${COL_ID} = '${id}'`,
  insertProfession: (
    profession: ProfessionModel
  ): string => `INSERT INTO ${TABLE_NAME} (${COL_NAME}) 
    VALUES ('${profession.name}')`,
  deleteProfession: (id: string) =>
    `DELETE FROM ${TABLE_NAME} where ${COL_ID} = '${id}'`,
  updateProfession: (id: string, profession: ProfessionModel) =>
    `UPDATE ${TABLE_NAME} SET ${COL_NAME} = '${profession.name}' WHERE ${COL_ID} = '${id}'`,
};
