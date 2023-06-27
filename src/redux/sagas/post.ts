import { put, call, delay } from 'typed-redux-saga';
import { takeEvery } from 'redux-saga/effects';
import {
  LOAD_POSTS,
  loadPostsPending,
  loadPostsSuccess,
  loadPostsFailure,
} from '../actions/post';
import API from '../../api';

function* loadPosts(): Generator {
  try {
    yield put(loadPostsPending(true));
    yield call(delay, 500);
    const incomingPosts = yield* call(API.getPosts);
    if (incomingPosts.data) yield put(loadPostsSuccess(incomingPosts.data));
    else yield put(loadPostsFailure('Не удалось загрузить посты'));
  } catch (e) {
    yield put(loadPostsFailure('Не удалось загрузить посты'));
  } finally {
    yield put(loadPostsPending(false));
  }
}

export default function* postSaga() {
  yield takeEvery(LOAD_POSTS, loadPosts);
}
