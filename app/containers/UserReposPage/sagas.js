import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import * as actions from './actions';
import api from 'services';

export function* fetchUserRepos(user) {
  const repos = yield call(api.fetchUserRepos, user);

  if (!repos.error) {
    yield put(actions.fetchUserPeposSuccess(repos.data));
  } else {
    yield put(actions.fetchUserPeposFailure(repos.error));
  }
}

export function* watchfetchUserRepos() {
  while (true) {
    const { user } = yield take(actions.LOAD_REPOS);
    yield fork(fetchUserRepos, user);
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* reposData() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(watchfetchUserRepos);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  reposData
];
