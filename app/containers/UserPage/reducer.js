import { fromJS } from 'immutable';
import { combineReducers } from 'redux';
import { USER_ACTION_TYPES, REPOS_ACTION_TYPES } from './actions';
import reducerHandler from 'utils/reducerHelper';

const getInitialState = () => fromJS({
  isFetching: false,
  data: null,
  error: null
});

function convertObjectToArray(actionTypeObject) {
  return Object.keys(actionTypeObject).map(key => actionTypeObject[key]);
}

export default combineReducers({
  info: reducerHandler(convertObjectToArray(USER_ACTION_TYPES),
                       getInitialState()),

  repos: reducerHandler(convertObjectToArray(REPOS_ACTION_TYPES),
                        getInitialState()),
});
