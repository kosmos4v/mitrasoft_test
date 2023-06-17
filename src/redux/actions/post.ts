import { TPost } from '../../models/post';

export const LOAD_POST = 'LOAD_POST';
export const LOAD_POST_PENDING = 'LOAD_POST_PENDING';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';

export const loadPost = () => ({
  type: LOAD_POST,
});

export const loadPostPending = (isPending: boolean) => ({
  type: LOAD_POST_PENDING,
  payload: {
    isLoadPostPending: isPending,
  },
});

export const loadPostSuccess = (posts: TPost[]) => ({
  type: LOAD_POST_SUCCESS,
  payload: {
    posts,
  },
});

export const loadPostFailure = (error: string) => ({
  type: LOAD_POST_FAILURE,
  payload: {
    error,
  },
});
