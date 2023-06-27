import {
  delay,
  put,
  call,
  takeEvery,
} from 'typed-redux-saga';
import { Action } from 'redux-actions';

import API from '../../api';
import {
  LOAD_COMMENTS_BY_POST_ID,
  loadCommentsByPostIdPending,
  loadCommentsByPostIdFailure,
  loadCommentsByPostIdSucces,
} from '../actions/comment';

function* loadComments({ payload }: Action<{ postId: number }>) {
  try {
    yield put(loadCommentsByPostIdPending(true));
    yield call(delay, 500);
    const incomingComments = yield* call(API.getComments, payload.postId);
    if (incomingComments.data) {
      yield put(loadCommentsByPostIdSucces(incomingComments.data, payload.postId));
    } else {
      yield put(loadCommentsByPostIdFailure('Не удалось загрузить коментарии'));
    }
  } catch (e) {
    yield put(loadCommentsByPostIdFailure('Не удалось загрузить коментарии'));
  } finally {
    yield put(loadCommentsByPostIdPending(false));
  }
}

export default function* commentSaga() {
  yield takeEvery(LOAD_COMMENTS_BY_POST_ID, loadComments);
}
