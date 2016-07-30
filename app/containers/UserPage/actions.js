import { createRequestTypes, actionCreator } from 'utils/actionHelper';

export const LOAD_USER_PAGE = 'LOAD_USER_PAGE';
export const REPOS = createRequestTypes('REPOS');

export const repos = {
  request: () => actionCreator(REPOS.REQUEST),
  success: data => actionCreator(REPOS.SUCCESS, { response: data }),
  failure: error => actionCreator(REPOS.FAILURE, { error })
};

export const loadUserPage = user => actionCreator(LOAD_USER_PAGE, { user });
