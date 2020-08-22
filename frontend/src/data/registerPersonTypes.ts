import { IContact } from './IContact';

export interface RegisterPersonTypes {
  onSubmit: any;
  firstName: any;
  secondName: any;
  lastName: any;
  lastSecondName: any;
  genre: any;
  civilState: any;
  email: any;
  dateBirth: any;
  phone: any;
  stratum: any;
  onChangePhoto: any;
  image: any;
  idProfession: any;
  idEPS: any;
  token: string;
  Stepper: any;
  disabled?: boolean;
}

export interface RegisterContactTypes {
  onSubmit: any;
  onPrevStep: any;
  Stepper: any;
  document: any;
  name: any;
  phone: any;
  email: any;
  direction: any;
  contacts: Array<IContact>;
  pushContact: any;
  disabled?: boolean;
}
