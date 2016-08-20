import request from 'utils/request';

const API_ROOT = 'https://api.github.com';

function callApi(endpoint) {
  return request(`${API_ROOT}/${endpoint}`);
}

export default {
  fetchUser: user => callApi(`users/${user}`),

  fetchRepos: user => callApi(`users/${user}/repos`),

  fetchRepoCommits: (user, repo) => callApi(`repos/${user}/${repo}/stats/commit_activity`),

  fetchSearchResult: (language, location, sort = 'followers') => {
    let url = `search/users?q=sort:${sort}`;

    if (language) {
      url += ` language:${language}`;
    }

    if (location) {
      url += ` location:${location}`;
    }

    return callApi(url);
  }
};
