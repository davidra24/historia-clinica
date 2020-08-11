import { SpecialtyModel } from "src/models/Specialty";

const TABLE_NAME = "SPECIALTIES";
const COL_ID = "id";
const COL_NAME = "name";
const COL_DESCRIPTION = "description";

export default {
  createTable: (): string => `CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (${COL_ID} UUID PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(), 
        ${COL_NAME} TEXT NOT NULL, ${COL_DESCRIPTION} TEXT NOT NULL)`,
  getAllSpecialties: (): string => `SELECT * FROM ${TABLE_NAME}`,
  getOneSpecialty: (id: string): string =>
    `SELECT * FROM ${TABLE_NAME} WHERE ${COL_ID} = '${id}'`,
  insertSpecialty: (
    specialty: SpecialtyModel
  ): string => `INSERT INTO ${TABLE_NAME} (${COL_NAME}, ${COL_DESCRIPTION}) 
    VALUES ('${specialty.name}','${specialty.description}')`,
  deleteSpecialty: (id: string) =>
    `DELETE FROM ${TABLE_NAME} where ${COL_ID} = '${id}'`,
  updateSpecialty: (
    id: string,
    specialty: SpecialtyModel
  ) => `UPDATE ${TABLE_NAME} SET ${COL_NAME} = '${specialty.name}',
           ${COL_DESCRIPTION} = '${specialty.description}' WHERE ${COL_ID} = '${id}'`,
};
