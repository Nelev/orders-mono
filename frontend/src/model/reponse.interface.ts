import { AxiosRequestConfig } from "axios";

interface IData<T> {
  products?: T;
}

export interface AxiosResponseProducts<T> {
  data: IData<T>;
  status: number;
  statusText: string;
  headers: unknown;
  config: AxiosRequestConfig;
  request?: unknown;
}
