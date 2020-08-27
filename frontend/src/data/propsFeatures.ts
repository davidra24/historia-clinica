import { IViewGeneralFeatures } from './IViewGeneralFeatures';
import { IViewQueries } from './IViewQueries';
import { IPerson } from './IPerson';

export interface propsFeatures {
  infoGeneral: IViewGeneralFeatures;
  readOnly: boolean;
}

export interface propsMedicalConsultation {
  patient: IPerson;
  readOnly: boolean;
  specialtyId: string;
}
