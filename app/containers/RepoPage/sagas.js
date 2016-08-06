import { take, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import * as actions from './actions';
import api from 'services';
import { fetchResource } from 'utils/sagaHelper';

const { repoCommits } = actions;

const fetchRepoCommits = fetchResource.bind(null, repoCommits, api.fetchRepoCommits);

export function* watchLoadRepoPage() {
  while (true) {
    const { userName, repoName } = yield take(actions.LOAD_REPO_PAGE);
    yield fork(fetchRepoCommits, userName, repoName);
  }
}

export function* repoPageData() {
  const watcher = yield fork(watchLoadRepoPage);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  repoPageData
];
