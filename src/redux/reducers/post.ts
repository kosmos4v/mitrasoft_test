import { handleActions } from 'redux-actions';
import { TPost, TIncomingPost } from '../../models/post';
import {
  LOAD_POSTS_PENDING,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_FAILURE,
} from '../actions/post';

export type TPostState = {
  isLoadPostPending: boolean,
  loadPostError?: string,
  posts?: TPost[],
};

export type TPostAction = {
  isLoadPostPending: boolean,
  error?: string,
  incomingPosts?: TIncomingPost[],
};

const initialState: TPostState = {
  isLoadPostPending: false,
  loadPostError: undefined,
  posts: undefined,
};

const postReducer = handleActions<TPostState, TPostAction>({
  [LOAD_POSTS_PENDING]: (state, { payload }) => ({
    ...state,
    isLoadPostPending: payload.isLoadPostPending,
  }),

  [LOAD_POSTS_SUCCESS]: (state, { payload }) => ({
    ...state,
    posts: payload.incomingPosts,
    loadPostError: undefined,
  }),

  [LOAD_POSTS_FAILURE]: (state, { payload }) => ({
    ...state,
    loadPostError: payload.error,
    posts: undefined,
  }),
}, initialState);

export default postReducer;
