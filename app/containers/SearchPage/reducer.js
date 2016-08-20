import { combineReducers } from 'redux';
import { SEARCH_ACTION_TYPE } from './actions';
import reducerHandler from 'utils/reducerHelper';

export default combineReducers({
  users: reducerHandler(SEARCH_ACTION_TYPE)
});
