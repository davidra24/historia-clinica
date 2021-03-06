import { GeneralMedicalFeaturesModel } from '../models/GeneralMedicalFeatures';

const TABLE_NAME = 'GENERALMEDICALFEATURES';
const COL_ID = 'id';
const COL_ID_QUERY = 'id_query';
const COL_HEIGHT = 'height';
const COL_WEIGHT = 'weight';
const COL_DRINK = 'drink';
const COL_SMOKE = 'smoke';
const COL_VICES = 'vices';
const COL_MANIAS = 'manias';
const COL_FAMILY_BACKGROUND = 'family_background';
const COL_MEDICAL_HISTORY = 'medical_history';
const COL_SURGERY_HISTORY = 'surgery_history';
const COL_TRAUMATIC_BACKGROUND = 'traumatic_background';
const COL_ALLERGY_HISTORY = 'allergy_history';

const FOREIGN_KEY_QUERIES = 'car_fk_idc';

const FOREIGN_TABLE_QUERIES = 'QUERIES';

const COL_FK_QUERIES = 'id';

export default {
  createTable: (): string => `CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (${COL_ID} UUID NOT NULL DEFAULT uuid_generate_v4(), 
    ${COL_ID_QUERY} UUID NOT NULL, ${COL_HEIGHT} NUMERIC, ${COL_WEIGHT} NUMERIC, ${COL_DRINK} BOOLEAN, ${COL_SMOKE} BOOLEAN,
    ${COL_VICES} TEXT, ${COL_MANIAS} TEXT, ${COL_FAMILY_BACKGROUND} TEXT, ${COL_MEDICAL_HISTORY} TEXT,
    ${COL_SURGERY_HISTORY} TEXT, ${COL_TRAUMATIC_BACKGROUND} TEXT, ${COL_ALLERGY_HISTORY} TEXT,
    CONSTRAINT ${FOREIGN_KEY_QUERIES} FOREIGN KEY (${COL_ID_QUERY}) REFERENCES ${FOREIGN_TABLE_QUERIES}(${COL_FK_QUERIES}))`,
  getAllGeneralMedicalFeatures: (): string => `SELECT * FROM ${TABLE_NAME}`,
  getOneGeneralMedicalFeatures: (id: string): string =>
    `SELECT * FROM ${TABLE_NAME} WHERE ${COL_ID} = '${id}'`,
  insertGeneralMedicalFeatures: (
    generalMedicalFeatures: GeneralMedicalFeaturesModel
  ): string => {
    const height = generalMedicalFeatures.height
      ? generalMedicalFeatures.height
      : null;
    const weight = generalMedicalFeatures.weight
      ? generalMedicalFeatures.weight
      : null;

    return `INSERT INTO ${TABLE_NAME} (${COL_ID_QUERY}, ${COL_HEIGHT}, ${COL_WEIGHT}, ${COL_DRINK},${COL_SMOKE},${COL_VICES},
    ${COL_MANIAS}, ${COL_FAMILY_BACKGROUND}, ${COL_MEDICAL_HISTORY},${COL_SURGERY_HISTORY},${COL_TRAUMATIC_BACKGROUND},${COL_ALLERGY_HISTORY}) 
      VALUES ('${generalMedicalFeatures.id_query}',${height},${weight},${generalMedicalFeatures.drink},
        ${generalMedicalFeatures.smoke},'${generalMedicalFeatures.vices}', '${generalMedicalFeatures.manias}','${generalMedicalFeatures.family_background}',
        '${generalMedicalFeatures.medical_history}','${generalMedicalFeatures.surgery_history}','${generalMedicalFeatures.traumatic_background}','${generalMedicalFeatures.allergy_history}')`;
  },
  deleteGeneralMedicalFeatures: (id: string) =>
    `DELETE FROM ${TABLE_NAME} where ${COL_ID} = '${id}'`,
  updateGeneralMedicalFeatures: (
    id: string,
    generalMedicalFeatures: GeneralMedicalFeaturesModel
  ) => `UPDATE ${TABLE_NAME} SET ${COL_ID_QUERY}='${generalMedicalFeatures.id_query}',${COL_HEIGHT} = ${generalMedicalFeatures.height},${COL_WEIGHT} = ${generalMedicalFeatures.weight},
  ${COL_DRINK} = ${generalMedicalFeatures.drink},${COL_SMOKE} = ${generalMedicalFeatures.smoke},${COL_VICES} = '${generalMedicalFeatures.vices}',
  ${COL_MANIAS} = '${generalMedicalFeatures.manias}',${COL_FAMILY_BACKGROUND} = '${generalMedicalFeatures.family_background}',${COL_MEDICAL_HISTORY} = '${generalMedicalFeatures.medical_history}',
  ${COL_SURGERY_HISTORY} = '${generalMedicalFeatures.surgery_history}', ${COL_TRAUMATIC_BACKGROUND} = '${generalMedicalFeatures.traumatic_background}', ${COL_ALLERGY_HISTORY} = '${generalMedicalFeatures.allergy_history}'
  WHERE ${COL_ID} = '${id}'`,
};
