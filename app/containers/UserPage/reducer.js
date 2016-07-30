import { fromJS } from 'immutable';
import { REPOS } from './actions';
import reducerHandler from 'utils/reducerHelper';

const RESOURCE_NAME = 'repos';
const { REQUEST, SUCCESS, FAILURE } = REPOS;

const initialState = fromJS({
  isFetching: false,
  [RESOURCE_NAME]: null,
  error: ''
});

export default reducerHandler(RESOURCE_NAME, [
  REQUEST,
  SUCCESS,
  FAILURE
], initialState);
