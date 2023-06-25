import { handleActions } from 'redux-actions';
import { title } from 'process';
import { TIncomingComment, TComment } from '../../models/comment';
import {
  LOAD_COMMENTS_PENDING,
  LOAD_COMMENTS_SUCCESS,
  LOAD_COMMENTS_FAILURE,
} from '../actions/comment';

export type TCommentState = {
  comments?: TComment[],
  isLoadCommentsPending: boolean,
  loadCommentsError?: string,
};

export type TCommentsAction = {
  comments?: TIncomingComment[],
  isLoadCommentsPending: boolean,
  error?: string,
};

const initialState: TCommentState = {
  comments: undefined,
  isLoadCommentsPending: false,
  loadCommentsError: undefined,
};

const CommentReducer = handleActions<TCommentState, TCommentsAction>({
  [LOAD_COMMENTS_PENDING]: (state, { payload }) => ({
    ...state,
    isLoadCommentsPending: payload.isLoadCommentsPending,
  }),

  [LOAD_COMMENTS_SUCCESS]: (state, { payload }) => {
    const comments: TComment[] = payload.comments?.map((comment) => ({
      title: comment.email,
      body: comment.body,
    })) || [];
    return ({
      ...state,
      comments,
      loadCommentsError: undefined,
    });
  },

  [LOAD_COMMENTS_FAILURE]: (state, { payload }) => ({
    ...state,
    loadCommentsError: payload.error,
    comments: undefined,
  }),

}, initialState);

export default CommentReducer;
