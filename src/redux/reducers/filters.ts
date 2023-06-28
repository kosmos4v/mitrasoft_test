import { handleActions } from 'redux-actions';
import { FILTER_POST_BY_SERCH } from '../actions/filter';

export type TFilterState = {
  searchValue: string,
};

export type TFilterAction = {
  searchValue: string,
};

const initialState: TFilterState = {
  searchValue: '',
};

const FilterReducer = handleActions<TFilterState, TFilterAction>({
  [FILTER_POST_BY_SERCH]: (state, { payload }) => ({
    ...state,
    searchValue: payload.searchValue,
  }),
}, initialState);

export default FilterReducer;
