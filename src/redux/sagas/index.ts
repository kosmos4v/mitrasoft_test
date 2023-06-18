import { all } from 'redux-saga/effects';
import postSaga from './post';

export default function* RootSaga(): Generator {
  // eslint-disable-next-line redux-saga/no-unhandled-errors
  yield all([
    postSaga(),
  ]);
}
