export const FILTER_POSTS_BY_SEARCH = 'FILTER_POSTS_BY_SERCH';
export const SORT_POSTS = 'SORT_POSTS';

export const filterPostsBySearch = (searchValue: string) => ({
  type: FILTER_POSTS_BY_SEARCH,
  payload: {
    searchValue,
  },
});

export const sortPosts = (ascendingSort: boolean) => ({
  type: SORT_POSTS,
  payload: {
    ascendingSort,
  },
});
