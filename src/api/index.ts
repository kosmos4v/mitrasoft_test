import requests from '../utils/requests';
import { TIncomingPost } from '../models/post';
import { TIncomingComment } from '../models/comment';

const API = {
  getPosts: () => requests.get<TIncomingPost[]>('/posts'),
  getComments: (id: number) => requests.get<TIncomingComment[]>(`/posts/${id}/comments`),
};

export default API;
