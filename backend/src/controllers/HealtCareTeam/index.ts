const TABLE_NAME = 'PATIENTS';
const COL_DOCUMENT = 'document';

const FOREIGN_KEY_PERSON = 'per_fk_doc';

const FOREIGN_TABLE_PEOPLE = 'PEOPLE';

const COL_FK_PEOPLE = 'document';

export default {
  createTable: (): string => {
    return `CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (${COL_DOCUMENT} TEXT PRIMARY KEY NOT NULL,
          CONSTRAINT ${FOREIGN_KEY_PERSON} FOREIGN KEY (${COL_DOCUMENT}) 
          REFERENCES ${FOREIGN_TABLE_PEOPLE}(${COL_FK_PEOPLE}))`;
  },
};
