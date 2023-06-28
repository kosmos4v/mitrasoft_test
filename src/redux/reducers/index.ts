import { combineReducers } from 'redux';
import post, { TPostState } from './post';
import comment, { TCommentState } from './comment';
import filter, { TFilterState } from './filters';

export type TRootState = {
  post: TPostState,
  comment: TCommentState,
  filter: TFilterState,
};

const reducer = combineReducers({
  post,
  comment,
  filter,
});

export default reducer;
