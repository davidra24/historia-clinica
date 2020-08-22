export interface IPerson {
  document: string | any;
  first_name: string;
  second_name: string;
  last_name: string;
  last_second_name: string;
  genre: number;
  date_birth: Date | any;
  email: string;
  civil_state: number;
  photo: string;
  phone: string;
  id_eps: string;
  id_profesion: string;
  stratum: number;
  deceased: boolean;
  deceased_date?: Date;
  is_healt_care_team: boolean;
}
