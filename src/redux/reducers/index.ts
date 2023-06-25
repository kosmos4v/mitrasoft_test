import { combineReducers } from 'redux';
import post, { TPostState } from './post';
import comment, { TCommentState } from './comment';

export type TRootState = {
  post: TPostState,
  comment: TCommentState,
};

const reducer = combineReducers({
  post,
  comment,
});

export default reducer;
