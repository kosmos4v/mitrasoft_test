import { handleActions } from 'redux-actions';
import { FILTER_POSTS_BY_SEARCH, SORT_POSTS } from '../actions/filter';

export type TFilterState = {
  searchValue: string,
  ascendingSort: boolean,
};

export type TFilterAction = {
  searchValue: string,
  ascendingSort: boolean,
};

const initialState: TFilterState = {
  searchValue: '',
  ascendingSort: true,
};

const FilterReducer = handleActions<TFilterState, TFilterAction>({
  [FILTER_POSTS_BY_SEARCH]: (state, { payload }) => ({
    ...state,
    searchValue: payload.searchValue,
  }),

  [SORT_POSTS]: (state, { payload }) => ({
    ...state,
    ascendingSort: payload.ascendingSort,
  }),
}, initialState);

export default FilterReducer;
