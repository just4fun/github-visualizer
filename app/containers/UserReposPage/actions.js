export const LOAD_REPOS = 'LOAD_REPOS';
export const LOAD_REPOS_SUCCESS = 'LOAD_REPOS_SUCCESS';
export const LOAD_REPOS_ERROR = 'LOAD_REPOS_ERROR';

export function fetchUserPepos(user) {
  return {
    type: LOAD_REPOS,
    user
  };
}

export function fetchUserPeposSuccess(repos) {
  return {
    type: LOAD_REPOS_SUCCESS,
    repos
  };
}

export function fetchUserPeposFailure(error) {
  return {
    type: LOAD_REPOS_ERROR,
    error
  };
}
