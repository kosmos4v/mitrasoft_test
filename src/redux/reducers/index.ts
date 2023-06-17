import { combineReducers } from 'redux';
import post, { TPostState } from './post';

export type RootReduser = {
  post: TPostState,
};

const reducer = combineReducers({
  post,
});

export default reducer;
