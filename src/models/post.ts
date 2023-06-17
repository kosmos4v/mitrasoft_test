import { TComment } from './comment';

export type TPost = {
  title: string,
  text: string,
  avatar: string,
  coments: TComment[],
};
