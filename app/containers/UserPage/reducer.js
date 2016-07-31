import { fromJS } from 'immutable';
import { combineReducers } from 'redux';
import { USER_ACTION_TYPES, REPOS_ACTION_TYPES } from './actions';
import reducerHandler from 'utils/reducerHelper';

const USER_RESOURCE_NAME = 'user';
const REPOS_RESOURCE_NAME = 'repos';

const getInitialState = (resource) => fromJS({
  isFetching: false,
  [resource]: [],
  error: ''
});

function convertObjectToArray(actionTypeObject) {
  return Object.keys(actionTypeObject).map(key => actionTypeObject[key]);
}

export default combineReducers({
  info: reducerHandler(USER_RESOURCE_NAME,
                       convertObjectToArray(USER_ACTION_TYPES),
                       getInitialState(USER_RESOURCE_NAME)),

  repos: reducerHandler(REPOS_RESOURCE_NAME,
                        convertObjectToArray(REPOS_ACTION_TYPES),
                        getInitialState(REPOS_RESOURCE_NAME)),
});
