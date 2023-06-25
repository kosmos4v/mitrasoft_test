import { TIncomingComment } from '../../models/comment';

export const LOAD_COMMENTS = 'LOAD_COMMENTS';
export const LOAD_COMMENTS_PENDING = 'LOAD_COMMENTS_PENDING';
export const LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
export const LOAD_COMMENTS_FAILURE = 'LOAD_COMMENTS_FAILURE';

export const loadComments = (id: number) => ({
  type: LOAD_COMMENTS,
  payload: {
    id,
  },
});

export const loadCommentsPending = (isPending: boolean) => ({
  type: LOAD_COMMENTS_PENDING,
  payload: {
    isLoadCommentsPending: isPending,
  },
});

export const loadCommentsSucces = (comments: TIncomingComment[]) => ({
  type: LOAD_COMMENTS_SUCCESS,
  payload: {
    comments,
  },
});

export const loadCommentsFailure = (error: string) => ({
  type: LOAD_COMMENTS_FAILURE,
  payload: {
    error,
  },
});
