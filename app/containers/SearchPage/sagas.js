import { take, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import * as actions from './actions';
import api from 'services';
import { fetchResource } from 'utils/sagaHelper';

const { search } = actions;

const fetchSearchResult = fetchResource.bind(null, search, api.fetchSearchResult);

export function* watchSearch() {
  while (true) {
    const { language, location } = yield take(actions.LOAD_SEARCH_RESULT);
    yield fork(fetchSearchResult, language, location);
  }
}

export function* searchPageData() {
  const watcher = yield fork(watchSearch);

  /**
  * add query string will also dispatch `LOCATION_CHANGE` action,
  * to avoid cancelling our `watcher`, we pass following function
  * to `take` effect.
  */
  const locationChangeFilter = (action) => {
    if (action.type !== LOCATION_CHANGE) { return false; }

    const { location, language } = action.payload.query;

    return !location && !language;
  };

  yield take(locationChangeFilter);
  yield cancel(watcher);
}

export default [
  searchPageData
];
