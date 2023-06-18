import requests from '../utils/requests';
import { TincomingPost } from '../models/post';

const API = {
  getPosts: () => requests.get<TincomingPost[]>('/posts'),
};

export default API;
