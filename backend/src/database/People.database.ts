import { PersonModel } from 'src/models/Person';

const TABLE_NAME = 'PEOPLE';
const COL_DOCUMENT = 'document';
const COL_FIRST_NAME = 'first_name';
const COL_SECOND_NAME = 'second_name';
const COL_LAST_NAME = 'last_name';
const COL_LAST_SECOND_NAME = 'last_second_name';
const COL_GENRE = 'genre';
const COL_DATE_BIRTH = 'date_birth';
const COL_EMAIL = 'email';
const COL_CIVIL_STATE = 'civil_state';
const COL_PHOTO = 'photo';
const COL_PHONE = 'phone';
const COL_ID_EPS = 'id_eps';
const COL_ID_PROFESSION = 'id_profession';
const COL_STRATUM = 'stratum';
const COL_DECEASED = 'deceased';
const COL_DECEASED_DATE = 'deceased_date';
const COL_IS_HEALTH_CARE_TEAM = 'is_health_care_team';

const FOREIGN_KEY_EPS = 'per_fk_ide';
const FOREIGN_KEY_USERS = 'per_fk_idu';
const FOREIGN_KEY_PROFESSIONS = 'pac_fk_idp';

const FOREIGN_TABLE_EPS = 'EPS';
const FOREIGN_TABLE_USERS = 'USERS';
const FOREIGN_TABLE_PROFESSIONS = 'PROFESSIONS';

const COL_FK_EPS = 'id';
const COL_FK_USERS = 'document';
const COL_FK_PROFESSIONS = 'id';

export default {
  createTable: (): string => `CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (${COL_DOCUMENT} TEXT PRIMARY KEY NOT NULL,
        ${COL_FIRST_NAME} TEXT NOT NULL, ${COL_SECOND_NAME} TEXT, ${COL_LAST_NAME} TEXT NOT NULL,
        ${COL_LAST_SECOND_NAME} TEXT, ${COL_GENRE} NUMERIC NOT NULL, ${COL_DATE_BIRTH} DATE NOT NULL,
        ${COL_EMAIL} TEXT, ${COL_CIVIL_STATE} TEXT NOT NULL, ${COL_PHOTO} TEXT, ${COL_PHONE} TEXT NOT NULL,
        ${COL_ID_EPS} UUID NOT NULL, ${COL_ID_PROFESSION} UUID, ${COL_STRATUM} NUMERIC, ${COL_DECEASED} BOOLEAN, 
        ${COL_DECEASED_DATE} DATE, ${COL_IS_HEALTH_CARE_TEAM} BOOLEAN,
        CONSTRAINT ${FOREIGN_KEY_USERS} FOREIGN KEY (${COL_DOCUMENT}) REFERENCES ${FOREIGN_TABLE_USERS}(${COL_FK_USERS}),
        CONSTRAINT ${FOREIGN_KEY_EPS} FOREIGN KEY (${COL_ID_EPS}) REFERENCES ${FOREIGN_TABLE_EPS}(${COL_FK_EPS}),
        CONSTRAINT ${FOREIGN_KEY_PROFESSIONS} FOREIGN KEY (${COL_ID_PROFESSION}) REFERENCES ${FOREIGN_TABLE_PROFESSIONS}(${COL_FK_PROFESSIONS}))`,
  getAllPeople: (): string => `SELECT * FROM ${TABLE_NAME}`,
  getOnePerson: (document: string): string =>
    `SELECT * FROM ${TABLE_NAME} WHERE ${COL_DOCUMENT} = '${document}'`,
  insertPerson: (
    person: PersonModel
  ): string => `INSERT INTO ${TABLE_NAME} (${COL_DOCUMENT}, ${COL_FIRST_NAME}, ${COL_SECOND_NAME}, ${COL_LAST_NAME}, ${COL_LAST_SECOND_NAME},
          ${COL_GENRE}, ${COL_DATE_BIRTH}, ${COL_EMAIL}, ${COL_CIVIL_STATE}, ${COL_PHOTO}, ${COL_PHONE}, ${COL_ID_EPS}, ${COL_ID_PROFESSION},
          ${COL_STRATUM}, ${COL_DECEASED}, ${COL_DECEASED_DATE}, ${COL_IS_HEALTH_CARE_TEAM}) 
          VALUES ('${person.document}', '${person.first_name}','${
    person.second_name
  }','${person.last_name}','${person.last_second_name}',${person.genre}, 
          '${person.date_birth}','${person.email}','${person.civil_state}','${
    person.photo
  }','${person.phone}','${person.id_eps}', ${
    person.id_profesion ? `'${person.id_profesion}'` : null
  },
          ${person.stratum}, ${person.deceased}, ${
    person.deceased_date ? `'${person.deceased_date}'` : null
  }, ${person.is_healt_care_team})`,
  deletePerson: (document: string) =>
    `DELETE FROM ${TABLE_NAME} where ${COL_DOCUMENT} = '${document}'`,
  updatePerson: (
    document: string,
    person: PersonModel
  ) => `UPDATE ${TABLE_NAME} SET ${COL_FIRST_NAME}='${
    person.first_name
  }', ${COL_SECOND_NAME}='${person.second_name}',${COL_LAST_NAME}='${
    person.last_name
  }',
                 ${COL_LAST_SECOND_NAME} = '${
    person.last_second_name
  }',${COL_GENRE}=${person.genre},${COL_DATE_BIRTH}='${
    person.date_birth
  }',${COL_EMAIL}='${person.email}',
                 ${COL_CIVIL_STATE}='${person.civil_state}', ${COL_PHOTO}='${
    person.photo
  }',${COL_PHONE}='${person.phone}', ${COL_ID_EPS} = '${person.id_eps}', 
                 ${COL_ID_PROFESSION} = ${
    person.id_profesion ? `'${person.id_profesion}'` : null
  }, ${COL_STRATUM} = ${person.stratum}, ${COL_DECEASED} = ${person.deceased},
                 ${COL_DECEASED_DATE} = ${
    person.deceased_date ? `'${person.deceased_date}'` : null
  }, ${COL_IS_HEALTH_CARE_TEAM} = ${
    person.is_healt_care_team
  } WHERE ${COL_DOCUMENT} = '${document}'`,
};
