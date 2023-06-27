import { TIncomingComment } from '../../models/comment';

export const LOAD_COMMENTS_BY_POST_ID = 'LOAD_COMMENTS';
export const LOAD_COMMENTS_BY_POST_ID_PENDING = 'LOAD_COMMENTS_BY_POST_ID_PENDING';
export const LOAD_COMMENTS_BY_POST_ID_SUCCESS = 'LOAD_COMMENTS_BY_POST_ID_SUCCESS';
export const LOAD_COMMENTS_BY_POST_ID_FAILURE = 'LOAD_COMMENTS_BY_POST_ID_FAILURE';

export const loadCommentsByPostId = (postId: number) => ({
  type: LOAD_COMMENTS_BY_POST_ID,
  payload: {
    postId,
  },
});

export const loadCommentsByPostIdPending = (isPending: boolean) => ({
  type: LOAD_COMMENTS_BY_POST_ID_PENDING,
  payload: {
    isLoadCommentsPending: isPending,
  },
});

export const loadCommentsByPostIdSucces = (
  commentsByPostId: TIncomingComment[],
  postId: number,
) => ({
  type: LOAD_COMMENTS_BY_POST_ID_SUCCESS,
  payload: {
    postId,
    commentsByPostId,
  },
});

export const loadCommentsByPostIdFailure = (error: string) => ({
  type: LOAD_COMMENTS_BY_POST_ID_FAILURE,
  payload: {
    error,
  },
});
