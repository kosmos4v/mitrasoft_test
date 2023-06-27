import { TIncomingComment } from './comment';

export type TIncomingPost = {
  body: string,
  id: number,
  title: string,
  userId: number,
};

export type TPost = TIncomingPost & {
  avatar?: string,
  coments?: TIncomingComment[],
};
