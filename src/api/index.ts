import requests from '../utils/requests';
import { TIncomingPost } from '../models/post';

const API = {
  getPosts: () => requests.get<TIncomingPost[]>('/posts'),
};

export default API;
