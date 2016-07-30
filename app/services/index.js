import request from 'utils/request';

const API_ROOT = 'https://api.github.com';

function callApi(endpoint) {
  return request(`${API_ROOT}/${endpoint}`);
}

export default {
  fetchRepos: user => callApi(`users/${user}/repos`)
};
