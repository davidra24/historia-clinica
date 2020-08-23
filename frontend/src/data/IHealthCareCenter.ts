export interface IHealthCareCenterTypes {
  onSubmit:any;
  name: any;
  website: any;
  phone: any;
  direction: any;
  email: any;
  description: any;
  token: any;
  disabled?: boolean;
}

export interface IHealthCareCenter {
  document:string | any;
  name: string;
  website: string;
  phone: string;
  direction: string;
  email: string;
  description: string;
}
