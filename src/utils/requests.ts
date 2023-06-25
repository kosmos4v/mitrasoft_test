import axios, { AxiosHeaders, AxiosRequestConfig } from 'axios';
import { TIncomingPost } from '../models/post';

const baseURL = 'https://jsonplaceholder.typicode.com/';

export type ResponseType<T = unknown> = {
  config: AxiosRequestConfig,
  data?: T,
  headers: AxiosHeaders,
  request: XMLHttpRequest,
  status: number,
  statusText: string,
  error?: string,
};

export const handleError = (e:Error) => {
  throw new Error(e.message);
};
const requests = {
  get: <T=unknown>(url: string): Promise<ResponseType<T>> => axios({
    url,
    baseURL,
    method: 'get',
  })
    .then((response) => response as ResponseType<T>)
    .catch(handleError),
};

export default requests;
