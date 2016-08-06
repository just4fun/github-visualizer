import { combineReducers } from 'redux';
import { REPO_COMMIT_ACTION_TYPES } from './actions';
import reducerHandler from 'utils/reducerHelper';

export default combineReducers({
  commits: reducerHandler(REPO_COMMIT_ACTION_TYPES)
});
