export const FILTER_POST_BY_SERCH = 'FILTER_POST_BY_SERCH';

export const filterPostBySerch = (searchValue: string) => ({
  type: FILTER_POST_BY_SERCH,
  payload: {
    searchValue,
  },
});
