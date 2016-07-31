import { take, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import * as actions from './actions';
import api from 'services';
import { fetchResource } from 'utils/sagaHelper';

const { user, repos } = actions;

const fetchUser = fetchResource.bind(null, user, api.fetchUser);
const fetchRepos = fetchResource.bind(null, repos, api.fetchRepos);

export function* watchLoadUserPage() {
  while (true) {
    const { userName } = yield take(actions.LOAD_USER_PAGE);

    yield fork(fetchUser, userName);
    yield fork(fetchRepos, userName);
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* userPageData() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(watchLoadUserPage);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  userPageData
];
