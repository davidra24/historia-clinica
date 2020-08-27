import { IContact } from './IContact';

export interface IRegisterPerson {
  isEdit: boolean;
  firstNameInfo?: any;
  secondNameInfo?: any;
  lastNameInfo?: any;
  lastSecondNameInfo?: any;
  emailInfo?: any;
  phoneInfo?: any;
  photoInfo?: any;
  genreInfo?: any;
  civilStateInfo?: any;
  epsInfo?: any;
  professionInfo?: any;
  stratumInfo?: any;
  dateBirthInfo?: any;
  arrayContacts?: Array<IContact>;
  setShow?: any;
}
