import { PersonModel } from "src/models/Person";

const TABLE_NAME = "PEOPLE";
const COL_DOCUMENT = "document";
const COL_ID_EPS = "idEPS";
const COL_FIRST_NAME = "firstName";
const COL_SECOND_NAME = "secondName";
const COL_LAST_NAME = "lastName";
const COL_LAST_SECOND_NAME = "lastSecondName";
const COL_GENRE = "genre";
const COL_DATE_BIRTH = "dateBirth";
const COL_EMAIL = "email";
const COL_CIVIL_STATE = "civilState";
const COL_PHOTO = "photo";
const COL_PHONE = "phone";

const FOREIGN_KEY_EPS = "per_fk_ide";
const FOREIGN_KEY_USERS = "per_fk_idu";

const FOREIGN_TABLE_EPS = "EPS";
const FOREIGN_TABLE_USERS = "USERS";

const COL_FK_EPS = "id";
const COL_FK_USERS = "document";

export default {
  createTable: (): string => `CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (${COL_DOCUMENT} TEXT PRIMARY KEY NOT NULL, ${COL_ID_EPS} UUID NOT NULL,
        ${COL_FIRST_NAME} TEXT NOT NULL, ${COL_SECOND_NAME} TEXT, ${COL_LAST_NAME} TEXT NOT NULL,
        ${COL_LAST_SECOND_NAME} TEXT, ${COL_GENRE} NUMERIC NOT NULL, ${COL_DATE_BIRTH} DATE NOT NULL,
        ${COL_EMAIL} TEXT, ${COL_CIVIL_STATE} TEXT NOT NULL, ${COL_PHOTO} TEXT, ${COL_PHONE} TEXT NOT NULL,
        CONSTRAINT ${FOREIGN_KEY_USERS} FOREIGN KEY (${COL_DOCUMENT}) REFERENCES ${FOREIGN_TABLE_USERS}(${COL_FK_USERS}),
        CONSTRAINT ${FOREIGN_KEY_EPS} FOREIGN KEY (${COL_ID_EPS}) REFERENCES ${FOREIGN_TABLE_EPS}(${COL_FK_EPS}))`,
  getAllPeople: (): string => `SELECT * FROM ${TABLE_NAME}`,
  getOnePerson: (document: string): string =>
    `SELECT * FROM ${TABLE_NAME} WHERE ${COL_DOCUMENT} = '${document}'`,
  insertPerson: (
    person: PersonModel
  ): string => `INSERT INTO ${TABLE_NAME} (${COL_DOCUMENT}, ${COL_ID_EPS}, ${COL_FIRST_NAME}, ${COL_SECOND_NAME},${COL_LAST_NAME},${COL_LAST_SECOND_NAME},
          ${COL_GENRE}, ${COL_DATE_BIRTH},${COL_EMAIL},${COL_CIVIL_STATE},${COL_PHOTO},${COL_PHONE}) 
          VALUES ('${person.document}', '${person.idEPS}','${person.firstName}','${person.secondName}','${person.Lastname}','${person.lastSecondName}',${person.genre},
            '${person.dateBirth}','${person.email}',${person.civilState},'${person.photo}','${person.phone}')`,
  deletePerson: (document: string) =>
    `DELETE FROM ${TABLE_NAME} where ${COL_DOCUMENT} = '${document}'`,
  updatePerson: (
    document: string,
    person: PersonModel
  ) => `UPDATE ${TABLE_NAME} SET ${COL_ID_EPS} = '${person.idEPS}', ${COL_FIRST_NAME}='${person.firstName}', ${COL_SECOND_NAME}='${person.secondName}',${COL_LAST_NAME}='${person.Lastname}',
                 ${COL_LAST_SECOND_NAME} = '${person.lastSecondName}',${COL_GENRE}=${person.genre},${COL_DATE_BIRTH}='${person.dateBirth}',${COL_EMAIL}='${person.email}',${COL_CIVIL_STATE}=${person.civilState},
                 ${COL_PHOTO}='${person.photo}',${COL_PHONE}='${person.phone}' WHERE ${COL_DOCUMENT} = '${document}'`,
};
