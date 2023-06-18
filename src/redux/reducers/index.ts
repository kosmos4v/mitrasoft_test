import { combineReducers } from 'redux';
import post, { TPostState } from './post';

export type TRootState = {
  post: TPostState,
};

const reducer = combineReducers({
  post,
});

export default reducer;
