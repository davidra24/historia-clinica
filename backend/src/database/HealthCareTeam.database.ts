import { HealthCareTeamModel } from "src/models/HealthCareTeam";

const TABLE_NAME = "HEALTHCARETEAM";
const COL_DOCUMENT = "document";

const FOREIGN_KEY_PERSON = "per_fk_doc";

const FOREIGN_TABLE_PEOPLE = "PEOPLE";

const COL_FK_PEOPLE = "document";

export default {
  createTable: (): string => `CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (${COL_DOCUMENT} TEXT PRIMARY KEY NOT NULL,
          CONSTRAINT ${FOREIGN_KEY_PERSON} FOREIGN KEY (${COL_DOCUMENT}) 
          REFERENCES ${FOREIGN_TABLE_PEOPLE}(${COL_FK_PEOPLE}))`,
  getAllHealthCareTeam: (): string => `SELECT * FROM ${TABLE_NAME}`,
  getOneHealthCareTeam: (document: string): string =>
    `SELECT * FROM ${TABLE_NAME} WHERE ${COL_DOCUMENT} = '${document}'`,
  insertHealthCareTeam: (
    healthCareTeam: HealthCareTeamModel
  ): string => `INSERT INTO ${TABLE_NAME} (${COL_DOCUMENT}) 
            VALUES ('${healthCareTeam.document}')`,
  deleteHealthCareTeam: (document: string) =>
    `DELETE FROM ${TABLE_NAME} where ${COL_DOCUMENT} = '${document}'`,
  updateHealthCareTeam: (
    document: string,
    healthCareTeam: HealthCareTeamModel
  ) => `UPDATE ${TABLE_NAME} SET WHERE ${COL_DOCUMENT} = '${document}'`,
};
