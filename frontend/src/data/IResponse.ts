export interface IResponse<T> {
  ok: boolean;
  status: number;
  message: string;
  data: T;
}
