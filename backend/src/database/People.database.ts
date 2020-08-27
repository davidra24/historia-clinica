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

const VIEW_PERSON = 'PERSON_VIEW';
const TABLE_QUERIES = 'QUERIES';
const TABLE_GENERAL_MEDICAL_FEATURES = 'GENERALMEDICALFEATURES';
const TABLE_PROFESSIONAL = 'medicalProfessional';
const COL_QUERIES_PARAMETER = 'id';
const COL_QUERIES_ID_CENTER = 'id_center';
const COL_QUERIES_PERSON_PARAMETER = 'document';
const COL_QUERIES_PROFESSIONAL_PARAMETER = 'professional_document';
const COL_GENERAL_MEDICAL_FEATURES_PARAMETER = 'id_query';

const COL_QUERY_DATE = 'date';
const COL_QUERY_ANNOTATION = 'annotation';
const COL_GMF_HEIGHT = 'height';
const COL_GMF_WEIGHT = 'weight';
const COL_GMF_DRINK = 'drink';
const COL_GMF_SMOKE = 'smoke';
const COL_GMF_VICES = 'vices';
const COL_GMF_MANIAS = 'manias';
const COL_GMF_FAMILY_BACKGROUND = 'family_background';
const COL_GMF_MEDICAL_HISTORY = 'medical_history';
const COL_GMF_SURGERY_HISTORY = 'surgery_history';
const COL_GMF_TRAUMATIC_BACKGROUND = 'traumatic_background';
const COL_GMF_ALLERGY_HISTORY = 'allergy_history';

const VIEW_QUERIES = 'QUERIES_VIEW';
const TABLE_SPECIALTIES = 'SPECIALTIES';
const TABLE_ATTENTIONCENTERS = 'ATTENTIONCENTERS';
const TABLE_HEALTHCENTERS = 'HEALTHCENTERS';
const COL_HEALTHCENTER_PARAMETER = 'id';
const COL_ATTENTIONCENTER_PARAMETER_SPECIALTY = 'id_specialty';
const COL_ATTENTIONCENTER_PARAMETER_ID_CENTER = 'id';
const COL_ATTENTIONCENTER_PARAMETER_DOCUMENT = 'document';
const COL_SPECIALTY_PARAMETER = 'id';
const COL_PERSON_PARAMETER = 'document';

const COL_HEALTHCENTER_NAME = 'name';
const COL_SPECIALTY_NAME = 'name';

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
  createViewPerson: (): string => `CREATE OR REPLACE VIEW ${VIEW_PERSON} AS SELECT 
  ${TABLE_NAME}.${COL_DOCUMENT} as pacient_document, ${TABLE_NAME}.${COL_FIRST_NAME} as pacient_first_name, 
  ${TABLE_NAME}.${COL_SECOND_NAME} as pacient_second_name,${TABLE_NAME}.${COL_LAST_NAME} as pacient_lastname, 
  ${TABLE_NAME}.${COL_LAST_SECOND_NAME} as pacient_last_second_name, ${TABLE_NAME}.${COL_GENRE} as pacient_genre,
  ${TABLE_QUERIES}.${COL_QUERIES_ID_CENTER} as id_center, ${TABLE_QUERIES}.${COL_QUERY_DATE} as query_date,
  ${TABLE_QUERIES}.${COL_QUERY_ANNOTATION} as query_annotation,
  ${TABLE_QUERIES}.${COL_QUERIES_PROFESSIONAL_PARAMETER} as professional_document, 
  ${TABLE_PROFESSIONAL}.${COL_FIRST_NAME} as professional_first_name, 
  ${TABLE_PROFESSIONAL}.${COL_SECOND_NAME} as professional_second_name, 
  ${TABLE_PROFESSIONAL}.${COL_LAST_NAME} as professional_lastname, 
  ${TABLE_PROFESSIONAL}.${COL_LAST_SECOND_NAME} as professional_last_second_name, 
  ${TABLE_GENERAL_MEDICAL_FEATURES}.${COL_GMF_HEIGHT} as pacient_height,
  ${TABLE_GENERAL_MEDICAL_FEATURES}.${COL_GMF_WEIGHT} as pacient_weight,
  ${TABLE_GENERAL_MEDICAL_FEATURES}.${COL_GMF_DRINK} as pacient_drink, 
  ${TABLE_GENERAL_MEDICAL_FEATURES}.${COL_GMF_SMOKE} as pacient_smoke,
  ${TABLE_GENERAL_MEDICAL_FEATURES}.${COL_GMF_VICES} as pacient_vices,
  ${TABLE_GENERAL_MEDICAL_FEATURES}.${COL_GMF_MANIAS} as pacient_manias,
  ${TABLE_GENERAL_MEDICAL_FEATURES}.${COL_GMF_FAMILY_BACKGROUND} as pacient_family_background,
  ${TABLE_GENERAL_MEDICAL_FEATURES}.${COL_GMF_MEDICAL_HISTORY} as pacient_medical_history,
  ${TABLE_GENERAL_MEDICAL_FEATURES}.${COL_GMF_SURGERY_HISTORY} as pacient_surgery_history,
  ${TABLE_GENERAL_MEDICAL_FEATURES}.${COL_GMF_TRAUMATIC_BACKGROUND} as pacient_traumatic_background,
  ${TABLE_GENERAL_MEDICAL_FEATURES}.${COL_GMF_ALLERGY_HISTORY} as pacient_allergy_history
  FROM ${TABLE_NAME}
  JOIN ${TABLE_QUERIES} ON 
  (${TABLE_NAME}.${COL_DOCUMENT}=${TABLE_QUERIES}.${COL_QUERIES_PERSON_PARAMETER})
  JOIN ${TABLE_NAME} as ${TABLE_PROFESSIONAL} ON
  (${TABLE_QUERIES}.${COL_QUERIES_PROFESSIONAL_PARAMETER}=${TABLE_PROFESSIONAL}.${COL_DOCUMENT})
  JOIN ${TABLE_GENERAL_MEDICAL_FEATURES} ON 
  (${TABLE_QUERIES}.${COL_QUERIES_PARAMETER}=${TABLE_GENERAL_MEDICAL_FEATURES}.${COL_GENERAL_MEDICAL_FEATURES_PARAMETER})`,
  selectFormViewPerson: (document: string): string =>
    `SELECT * FROM ${VIEW_PERSON} WHERE pacient_document = '${document}'`,
  createViewQueries: (): string => `CREATE OR REPLACE VIEW ${VIEW_QUERIES} AS SELECT 
    ${TABLE_NAME}.${COL_DOCUMENT} as pacient_document,
    ${TABLE_QUERIES}.${COL_QUERY_DATE} as query_date, 
    ${TABLE_NAME}.${COL_FIRST_NAME} as pacient_first_name, 
    ${TABLE_NAME}.${COL_SECOND_NAME} as pacient_second_name,
    ${TABLE_NAME}.${COL_LAST_NAME} as pacient_lastname, 
    ${TABLE_NAME}.${COL_LAST_SECOND_NAME} as pacient_last_second_name, 
    ${TABLE_NAME}.${COL_PHONE} as pacient_phone,
    ${TABLE_HEALTHCENTERS}.${COL_HEALTHCENTER_NAME} as name_center, 
    ${TABLE_PROFESSIONAL}.${COL_FIRST_NAME} as professional_first_name, 
    ${TABLE_PROFESSIONAL}.${COL_SECOND_NAME} as professional_second_name, 
    ${TABLE_PROFESSIONAL}.${COL_LAST_NAME} as professional_lastname, 
    ${TABLE_PROFESSIONAL}.${COL_LAST_SECOND_NAME} as professional_last_second_name, 
    ${TABLE_SPECIALTIES}.${COL_SPECIALTY_PARAMETER} as specialty_id, 
    ${TABLE_SPECIALTIES}.${COL_SPECIALTY_NAME} as specialty_name, 
    ${TABLE_QUERIES}.${COL_QUERY_ANNOTATION} as query_annotation
     FROM ${TABLE_NAME} JOIN ${TABLE_QUERIES} ON 
     (${TABLE_NAME}.${COL_DOCUMENT}=${TABLE_QUERIES}.${COL_QUERIES_PERSON_PARAMETER})
     JOIN ${TABLE_NAME} as ${TABLE_PROFESSIONAL} ON
     (${TABLE_QUERIES}.${COL_QUERIES_PROFESSIONAL_PARAMETER}=${TABLE_PROFESSIONAL}.${COL_DOCUMENT})
     JOIN ${TABLE_HEALTHCENTERS} ON 
     (${TABLE_QUERIES}.${COL_QUERIES_ID_CENTER}=${TABLE_HEALTHCENTERS}.${COL_HEALTHCENTER_PARAMETER})
     JOIN ${TABLE_ATTENTIONCENTERS} ON 
     (${TABLE_QUERIES}.${COL_QUERIES_ID_CENTER}=${TABLE_ATTENTIONCENTERS}.${COL_ATTENTIONCENTER_PARAMETER_ID_CENTER} AND ${TABLE_QUERIES}.${COL_QUERIES_PROFESSIONAL_PARAMETER}=${TABLE_ATTENTIONCENTERS}.${COL_ATTENTIONCENTER_PARAMETER_DOCUMENT})
     JOIN ${TABLE_SPECIALTIES} ON
     (${TABLE_ATTENTIONCENTERS}.${COL_ATTENTIONCENTER_PARAMETER_SPECIALTY}=${TABLE_SPECIALTIES}.${COL_SPECIALTY_PARAMETER})`,
  selectFormViewQueries: (document: string): string =>
    `SELECT * FROM ${VIEW_QUERIES} WHERE pacient_document = '${document}'`,
  selectFormViewQueriesSpecialties: (
    document: string,
    specialty: string
  ): string =>
    `SELECT * FROM ${VIEW_QUERIES} WHERE pacient_document = '${document}' and specialty_id = '${specialty}'`,
};
