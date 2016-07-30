import {
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
} from './actions';
import { fromJS } from 'immutable';

const initialState = fromJS({
  isLoading: false,
  repos: [],
  error: ''
});

function reposReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_REPOS:
      return state.set('isLoading', true);
    case LOAD_REPOS_SUCCESS:
      return state.set('isLoading', false)
                  .set('repos', action.repos);
    case LOAD_REPOS_ERROR:
      return state.set('isLoading', false)
                  .set('error', action.error);
    default:
      return state;
  }
}

export default reposReducer;
