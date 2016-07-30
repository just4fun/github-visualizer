import { call, put } from 'redux-saga/effects';

export function* fetchResource(resource, api, id) {
  yield put(resource.request());
  const { data, error } = yield call(api, id);

  if (!error) {
    yield put(resource.success(data));
  } else {
    yield put(resource.failure(error));
  }
}
