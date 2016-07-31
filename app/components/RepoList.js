import React from 'react';

export default class RepoList extends React.Component {
  render() {
    let { isFetching, repos } = this.props.repos;

    return (
      <div>
        {isFetching &&
          <h2>Loading repos...</h2>
        }
        {!isFetching && repos && repos.length > 0 &&
          <ul>
            {repos.map(repo => <li key={repo.id}>{repo.full_name}</li>)}
          </ul>
        }
      </div>
    );
  }
}

RepoList.propTypes = {
  repos: React.PropTypes.array
};
