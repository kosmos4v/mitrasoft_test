import {
  delay,
  put,
  call,
  takeEvery,
} from 'typed-redux-saga';
import { Action } from 'redux-actions';

import API from '../../api';
import {
  LOAD_COMMENTS,
  loadCommentsPending,
  loadCommentsFailure,
  loadCommentsSucces,
} from '../actions/comment';

function* loadComments({ payload }: Action<{ id: number }>) {
  try {
    yield put(loadCommentsPending(true));
    yield call(delay, 5000);
    const incomingComments = yield* call(API.getComments, payload.id);
    if (incomingComments.data) {
      console.log(incomingComments);
      yield put(loadCommentsSucces(incomingComments.data));
    } else {
      yield put(loadCommentsFailure('Не удалось загрузить коментарии'));
    }
  } catch (e) {
    yield put(loadCommentsFailure('Не удалось загрузить коментарии'));
  } finally {
    yield put(loadCommentsPending(false));
  }
}

export default function* commentSaga() {
  yield takeEvery(LOAD_COMMENTS, loadComments);
}
