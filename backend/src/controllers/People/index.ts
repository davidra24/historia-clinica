const TABLE_NAME = 'USERS';
const COL_DOCUMENT = 'document';
const COL_FIRST_NAME = 'first_name';
const COL_SECOND_NAME = 'second_name';
const COL_LAST_NAME = 'last_name';
const COL_LAST_SECOND_NAME = 'last_Second_name';
const COL_GENRE = 'genre';
const COL_DATE_BIRTH = 'date_of_birth';
const COL_EMAIL = 'email';
const COL_CIVIL_STATE = 'civil_state';
const COL_PHOTO = 'photo';
const COL_PHONE = 'phone';

export default {
  createEnumCivilState: (): string =>
    `CREATE TYPE CIVIL_STATE_ENUM ('Soltero(a)','Casado(a)','Divorciado(a)','Unión Libre', 'Viudo(a)')`,
  createTable: (): string => `CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (${COL_DOCUMENT} TEXT PRIMARY KEY NOT NULL, 
        ${COL_FIRST_NAME} TEXT NOT NULL, ${COL_SECOND_NAME} TEXT, ${COL_LAST_NAME} TEXT NOT NULL,
        ${COL_LAST_SECOND_NAME} TEXT, ${COL_GENRE} TEXT NOT NULL, ${COL_DATE_BIRTH} DATE NOT NULL,
        ${COL_EMAIL} TEXT, ${COL_CIVIL_STATE} CIVIL_STATE_ENUM NOT NULL, ${COL_PHOTO} TEXT}, ${COL_PHONE} TEXT NOT NULL)`,
};
