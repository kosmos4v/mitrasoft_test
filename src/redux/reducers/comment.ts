import { handleActions } from 'redux-actions';
import { TCommentsByPostId, TIncomingComment } from '../../models/comment';
import {
  LOAD_COMMENTS_BY_POST_ID_PENDING,
  LOAD_COMMENTS_BY_POST_ID_SUCCESS,
  LOAD_COMMENTS_BY_POST_ID_FAILURE,
} from '../actions/comment';

export type TCommentState = {
  comments: TCommentsByPostId,
  isLoadCommentsPending: boolean,
  loadCommentsError?: string,
};

export type TCommentsAction = {
  commentsByPostId: TIncomingComment[],
  isLoadCommentsPending: boolean,
  postId: number,
  error?: string,
};

const initialState: TCommentState = {
  comments: {},
  isLoadCommentsPending: false,
  loadCommentsError: undefined,
};

const CommentReducer = handleActions<TCommentState, TCommentsAction>({

  [LOAD_COMMENTS_BY_POST_ID_PENDING]: (state, { payload }) => ({
    ...state,
    isLoadCommentsPending: payload.isLoadCommentsPending,
  }),

  [LOAD_COMMENTS_BY_POST_ID_SUCCESS]: (state, { payload }) => ({
    ...state,
    comments: state.comments
      ? { ...state.comments, [payload.postId]: payload.commentsByPostId }
      : { [payload.postId]: payload.commentsByPostId },
    loadCommentsError: undefined,
  }),

  [LOAD_COMMENTS_BY_POST_ID_FAILURE]: (state, { payload }) => ({
    ...state,
    loadCommentsError: payload.error,
    commentsByPostId: undefined,
  }),

}, initialState);

export default CommentReducer;
