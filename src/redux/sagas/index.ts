import { all } from 'redux-saga/effects';
import postSaga from './post';
import commentSaga from './comment';

export default function* RootSaga(): Generator {
  // eslint-disable-next-line redux-saga/no-unhandled-errors
  yield all([
    postSaga(),
    commentSaga(),
  ]);
}
