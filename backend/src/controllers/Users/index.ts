const TABLE_NAME = 'USERS';
const COL_DOCUMENT = 'document';
const COL_DOCUMENT_TYPE = 'document_type';
const COL_PASSWORD = 'password';
const COL_ACTIVE = 'active';

export default {
  createTable: (): string => {
    return `CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (${COL_DOCUMENT} NUMERIC PRIMARY KEY NOT NULL, 
        ${COL_DOCUMENT_TYPE} TEXT NOT NULL, ${COL_PASSWORD} TEXT NOT NULL, ${COL_ACTIVE} BOOLEAN NOT NULL)`;
  },
};
