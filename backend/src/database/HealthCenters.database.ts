import { HealthCenterModel } from 'src/models/HealthCenter';

const TABLE_NAME = 'HEALTHCENTERS';
const COL_DOCUMENT = 'id';
const COL_NAME = 'name';
const COL_WEBSITE = 'website';
const COL_PHONE = 'phone';
const COL_DIRECTION = 'direction';
const COL_EMAIL = 'email';
const COL_DESCRIPTION = 'description';

const FOREIGN_KEY_USERS = 'cen_fk_docu';

const FOREIGN_TABLE_USERS = 'users';

const COL_FK_USERS = 'document';

export default {
  createTable: (): string => `CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (${COL_DOCUMENT} TEXT PRIMARY KEY NOT NULL, 
        ${COL_NAME} TEXT NOT NULL, ${COL_WEBSITE} TEXT, ${COL_PHONE} TEXT NOT NULL, ${COL_DIRECTION} TEXT NOT NULL,
        ${COL_EMAIL} TEXT, ${COL_DESCRIPTION} TEXT,
        CONSTRAINT ${FOREIGN_KEY_USERS} FOREIGN KEY (${COL_DOCUMENT}) REFERENCES ${FOREIGN_TABLE_USERS}(${COL_FK_USERS}))`,
  getAllHealthCenters: (): string => `SELECT * FROM ${TABLE_NAME}`,
  getOneHealthCenter: (id: string): string =>
    `SELECT * FROM ${TABLE_NAME} WHERE ${COL_DOCUMENT} = '${id}'`,
  insertHealthCenter: (
    healthCenter: HealthCenterModel
  ): string => `INSERT INTO ${TABLE_NAME} (${COL_DOCUMENT}, ${COL_NAME}, ${COL_WEBSITE},${COL_PHONE},
          ${COL_DIRECTION},${COL_EMAIL},${COL_DESCRIPTION}) 
          VALUES ('${healthCenter.id}', '${healthCenter.name}','${healthCenter.website}','${healthCenter.phone}',
            '${healthCenter.direction}','${healthCenter.email}','${healthCenter.description}')`,
  deleteHealthCenter: (id: string) =>
    `DELETE FROM ${TABLE_NAME} where ${COL_DOCUMENT} = ${id}`,
  updateHealthCenter: (
    id: string,
    healthCenter: HealthCenterModel
  ) => `UPDATE ${TABLE_NAME} SET ${COL_NAME} = '${healthCenter.name}', ${COL_WEBSITE}='${healthCenter.website}',
        ${COL_PHONE}='${healthCenter.phone}', ${COL_DIRECTION}='${healthCenter.direction}',${COL_EMAIL}='${healthCenter.email}',
        ${COL_DESCRIPTION} = '${healthCenter.description}' WHERE ${COL_DOCUMENT} = '${id}'`,
};
