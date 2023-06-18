import axios from 'axios';
import { TincomingPost } from '../models/post';

const baseURL = 'https://jsonplaceholder.typicode.com/';

export type ResponseType<T = unknown> = {
  data?: T,
  error?: string,
  status: number,
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
