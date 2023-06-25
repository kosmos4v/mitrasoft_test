export type TIncomingComment = {
  postId: number,
  id: number,
  email: string, // заголовок
  name: string,
  body: string, // text
};

export type TComment = {
  title: string,
  body: string,
};
