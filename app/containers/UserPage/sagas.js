import { take, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import * as actions from './actions';
import api from 'services';
import { fetchResource } from 'utils/sagaHelper';

const { repos } = actions;
const fetchRepos = fetchResource.bind(null, repos, api.fetchRepos);

export function* watchLoadUserPage() {
  while (true) {
    const { user } = yield take(actions.LOAD_USER_PAGE);
    yield fork(fetchRepos, user);
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
