import { TincomingPost } from '../../models/post';

export const LOAD_POSTS = 'LOAD_POSTS';
export const LOAD_POSTS_PENDING = 'LOAD_POSTS_PENDING';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';

export const loadPosts = () => ({
  type: LOAD_POSTS,
});

export const loadPostsPending = (isPending: boolean) => ({
  type: LOAD_POSTS_PENDING,
  payload: {
    isLoadPostPending: isPending,
  },
});

export const loadPostsSuccess = (incomingPosts: TincomingPost[]) => ({
  type: LOAD_POSTS_SUCCESS,
  payload: {
    incomingPosts,
  },
});

export const loadPostsFailure = (error: string) => ({
  type: LOAD_POSTS_FAILURE,
  payload: {
    error,
  },
});
