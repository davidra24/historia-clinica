import { IPerson } from './IPerson';
import { IContact } from './IContact';

export interface profilePersonShowTypes {
  setShow?: Function;
  person: IPerson;
  EPSName?: string;
  ProfessionName?: string;
  handleSubmit?: any;
  speacialtyName?: string;
}

export interface profilePersonEditTypes {
  setShow: Function;
  firstName: any;
  secondName: any;
  lastName: any;
  lastSecondName: any;
  email: any;
  phone: any;
  photo: any;
  genre: any;
  civilState: any;
  eps: any;
  profession: any;
  stratum: any;
  dateBirth: any;
  arrayContacts: Array<IContact>;
}
