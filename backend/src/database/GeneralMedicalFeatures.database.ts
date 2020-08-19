import { GeneralMedicalFeaturesModel } from "src/models/GeneralMedicalFeatures";

const TABLE_NAME = "GENERALMEDICALFEATURES";
const COL_ID = "id";
const COL_ID_QUERY = "idQuery";
const COL_HEIGHT = "height";
const COL_WEIGHT = "weight";
const COL_DRINK = "drink";
const COL_SMOKE = "smoke";
const COL_VICES = "vices";
const COL_MANIAS = "manias";
const COL_FAMILY_BACKGROUND = "familyBackground";
const COL_MEDICAL_HISTORY = "medicalHistory";
const COL_SURGERY_HISTORY = "surgeryHistory";
const COL_TRAUMATIC_BACKGROUND = "traumaticBackground";
const COL_ALLERGY_HISTORY = "allergyHistory";

const FOREIGN_KEY_QUERIES = "car_fk_idc";

const FOREIGN_TABLE_QUERIES = "QUERIES";

const COL_FK_QUERIES = "id";

export default {
  createTable: (): string => `CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (${COL_ID} UUID NOT NULL DEFAULT uuid_generate_v4(), 
    ${COL_ID_QUERY} UUID NOT NULL, ${COL_HEIGHT} NUMERIC NOT NULL, ${COL_WEIGHT} NUMERIC NOT NULL, ${COL_DRINK} BOOLEAN, ${COL_SMOKE} BOOLEAN,
    ${COL_VICES} TEXT, ${COL_MANIAS} TEXT, ${COL_FAMILY_BACKGROUND} TEXT, ${COL_MEDICAL_HISTORY} TEXT,
    ${COL_SURGERY_HISTORY} TEXT, ${COL_TRAUMATIC_BACKGROUND} TEXT, ${COL_ALLERGY_HISTORY} TEXT,
    CONSTRAINT ${FOREIGN_KEY_QUERIES} FOREIGN KEY (${COL_ID_QUERY}) REFERENCES ${FOREIGN_TABLE_QUERIES}(${COL_FK_QUERIES}))`,
  getAllGeneralMedicalFeatures: (): string => `SELECT * FROM ${TABLE_NAME}`,
  getOneGeneralMedicalFeatures: (id: string): string =>
    `SELECT * FROM ${TABLE_NAME} WHERE ${COL_ID} = '${id}'`,
  insertGeneralMedicalFeatures: (
    generalMedicalFeatures: GeneralMedicalFeaturesModel
  ): string => `INSERT INTO ${TABLE_NAME} (${COL_ID_QUERY}, ${COL_HEIGHT}, ${COL_WEIGHT}, ${COL_DRINK},${COL_SMOKE},${COL_VICES},
    ${COL_MANIAS}, ${COL_FAMILY_BACKGROUND}, ${COL_MEDICAL_HISTORY},${COL_SURGERY_HISTORY},${COL_TRAUMATIC_BACKGROUND},${COL_ALLERGY_HISTORY}) 
      VALUES ('${generalMedicalFeatures.idQuery}',${generalMedicalFeatures.height},${generalMedicalFeatures.weight},${generalMedicalFeatures.drink},
        ${generalMedicalFeatures.smoke},'${generalMedicalFeatures.vices}', '${generalMedicalFeatures.manias}','${generalMedicalFeatures.familyBackground}',
        '${generalMedicalFeatures.medicalHistory}','${generalMedicalFeatures.surgeryHistory}','${generalMedicalFeatures.traumaticBackground}','${generalMedicalFeatures.allergyHistory}')`,
  deleteGeneralMedicalFeatures: (id: string) =>
    `DELETE FROM ${TABLE_NAME} where ${COL_ID} = '${id}'`,
  updateGeneralMedicalFeatures: (
    id: string,
    generalMedicalFeatures: GeneralMedicalFeaturesModel
  ) => `UPDATE ${TABLE_NAME} SET ${COL_ID_QUERY}='${generalMedicalFeatures.idQuery}',${COL_HEIGHT} = ${generalMedicalFeatures.height},${COL_WEIGHT} = ${generalMedicalFeatures.weight},
  ${COL_DRINK} = ${generalMedicalFeatures.drink},${COL_SMOKE} = ${generalMedicalFeatures.smoke},${COL_VICES} = '${generalMedicalFeatures.vices}',
  ${COL_MANIAS} = '${generalMedicalFeatures.manias}',${COL_FAMILY_BACKGROUND} = '${generalMedicalFeatures.familyBackground}',${COL_MEDICAL_HISTORY} = '${generalMedicalFeatures.medicalHistory}'
  ${COL_SURGERY_HISTORY} = '${generalMedicalFeatures.surgeryHistory}',${COL_TRAUMATIC_BACKGROUND} = '${generalMedicalFeatures.traumaticBackground}',${COL_ALLERGY_HISTORY} = '${generalMedicalFeatures.allergyHistory}'
  WHERE ${COL_ID} = '${id}'`,
};
