import { createRequestTypes, getActions, actionCreator } from 'utils/actionHelper';

export const LOAD_USER_PAGE = 'LOAD_USER_PAGE';
export const USER_ACTION_TYPES = createRequestTypes('USER');
export const REPOS_ACTION_TYPES = createRequestTypes('REPOS');

export const user = getActions(USER_ACTION_TYPES);
export const repos = getActions(REPOS_ACTION_TYPES);

export const loadUserPage = userName => actionCreator(LOAD_USER_PAGE, { userName });
