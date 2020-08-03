const TABLE_NAME = 'PROFESSIONS';
const COL_ID = 'id';
const COL_NAME = 'name';

export default {
  createTable: (): string => {
    return `CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (${COL_ID} UUID PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(), 
        ${COL_NAME} TEXT NOT NULL)`;
  },
};
