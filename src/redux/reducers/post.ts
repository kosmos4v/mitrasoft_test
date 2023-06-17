import { handleActions } from 'redux-actions';
import { TPost } from '../../models/post';
import {
  LOAD_POST_PENDING,
  LOAD_POST_SUCCESS,
  LOAD_POST_FAILURE,
} from '../actions/post';

export type TPostState = {
  isLoadPostPending: boolean,
  loadPostError?: string,
  posts?: TPost[],
};

export type TPostAction = {
  isLoadPostPending: boolean,
  error?: string,
  posts: TPost[],
};

const initialState: TPostState = {
  isLoadPostPending: false,
  loadPostError: undefined,
  posts: undefined,
};

export const postReducer = handleActions<TPostState, TPostAction>({
  [LOAD_POST_PENDING]: (state, { payload }) => ({
    ...state,
    isLoadPostPending: payload.isLoadPostPending,
  }),

  [LOAD_POST_SUCCESS]: (state, { payload }) => ({
    ...state,
    posts: payload.posts,
    loadPostError: undefined,
  }),

  [LOAD_POST_FAILURE]: (state, { payload }) => ({
    ...state,
    loadPostError: payload.error,
    posts: undefined,
  }),
}, initialState);

export default postReducer;
