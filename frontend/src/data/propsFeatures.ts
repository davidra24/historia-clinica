import { IViewGeneralFeatures } from './IViewGeneralFeatures';
import { IViewQueries } from './IViewQueries';
import { IPerson } from './IPerson';
import { IViewAttentionCenter } from './IViewAttentionCenter';

export interface propsFeatures {
  infoGeneral: IViewGeneralFeatures;
  readOnly: boolean;
  setInfoGeneral?: any;
  makeQuery: any;
  patient: IPerson;
  setLoading: any;
}

export interface propsMedicalConsultation {
  patient: IPerson;
  readOnly: boolean;
  selectedAttentionCenter?: IViewAttentionCenter;
  specialtyId?: string;
}
