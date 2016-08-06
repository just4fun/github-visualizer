import { call, put } from 'redux-saga/effects';

export function* fetchResource(resource, api, ...ids) {
  yield put(resource.request());
  const { data, error } = yield call(api, ...ids);

  if (!error) {
    yield put(resource.success(data));
  } else {
    yield put(resource.failure(error));
  }
}
