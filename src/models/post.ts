import { TComment } from './comment';

export type TPost = {
  id: number,
  title: string,
  text: string,
  avatar?: string,
  coments?: TComment[],
};

export type TIncomingPost = {
  body: string,
  id: number,
  title: string,
  userId: number,
};
