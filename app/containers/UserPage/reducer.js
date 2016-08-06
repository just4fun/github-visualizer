import { combineReducers } from 'redux';
import { USER_ACTION_TYPES, REPOS_ACTION_TYPES } from './actions';
import reducerHandler from 'utils/reducerHelper';

export default combineReducers({
  info: reducerHandler(USER_ACTION_TYPES),

  repos: reducerHandler(REPOS_ACTION_TYPES)
});
