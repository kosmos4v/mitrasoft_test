import { TComment } from './comment';

export type TPost = {
  id: string,
  title: string,
  text: string,
  avatar?: string,
  coments?: TComment[],
};

export type TincomingPost = {
  body: string,
  id: number,
  title: string,
  userId: number,
};
