import { createRequestTypes, actionCreator } from 'utils/actionHelper';

export const LOAD_USER_PAGE = 'LOAD_USER_PAGE';
export const USER_ACTION_TYPES = createRequestTypes('USER');
export const REPOS_ACTION_TYPES = createRequestTypes('REPOS');

export const user = getActions(USER_ACTION_TYPES);
export const repos = getActions(REPOS_ACTION_TYPES);

function getActions(actionTypes) {
  return {
    request: () => actionCreator(actionTypes.REQUEST),
    success: data => actionCreator(actionTypes.SUCCESS, { response: data }),
    failure: error => actionCreator(actionTypes.FAILURE, { error })
  };
}

export const loadUserPage = userName => actionCreator(LOAD_USER_PAGE, { userName });
