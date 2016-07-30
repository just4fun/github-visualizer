const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

export function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((resource, type) => {
    resource[type] = `${base}_${type}`;
    return resource;
  }, {});
}

export function actionCreator(type, payload = {}) {
  return { type, ...payload };
}
