import { createRequestTypes, getActions, actionCreator } from 'utils/actionHelper';

export const LOAD_SEARCH_RESULT = 'LOAD_SEARCH_RESULT';
export const SEARCH_ACTION_TYPE = createRequestTypes('SEARCH');

export const search = getActions(SEARCH_ACTION_TYPE);

export const loadSearchResult = (language, location) => actionCreator(LOAD_SEARCH_RESULT, { language, location });
