import { createRequestTypes, getActions, actionCreator } from 'utils/actionHelper';

export const LOAD_REPO_PAGE = 'LOAD_REPO_PAGE';
export const REPO_COMMIT_ACTION_TYPES = createRequestTypes('REPO_COMMIT');

export const repoCommits = getActions(REPO_COMMIT_ACTION_TYPES);

export const loadRepoPage = (userName, repoName) => actionCreator(LOAD_REPO_PAGE, { userName, repoName });
