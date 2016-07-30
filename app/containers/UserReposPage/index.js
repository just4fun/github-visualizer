import React from 'react';
import { connect } from 'react-redux';
import { fetchUserPepos } from './actions';

export class UserReposPage extends React.Component {
  componentWillMount() {
    this.props.fetchUserPepos(this.props.user);
  }

  render() {
    let { isLoading, repos } = this.props;
    repos = repos || [];

    return (
      <div>
        {isLoading &&
          <h2>Loading repos...</h2>
        }
        {!isLoading && repos.length > 0 &&
          <ul>
            {repos.map(repo => <li key={repo.id}>{repo.full_name}</li>)}
          </ul>
        }
      </div>
    );
  }
}

UserReposPage.propTypes = {
  isLoading: React.PropTypes.func,
  repos: React.PropTypes.array,
  error: React.PropTypes.string,
  user: React.PropTypes.string,
  fetchUserPepos: React.PropTypes.func,
};

function mapStateToProps(state) {
  const location = state.getIn(['route', 'locationBeforeTransitions']);
  const userRepos = state.get('userRepos');

  return {
    isLoading: userRepos.get('isLoading'),
    repos: userRepos.get('repos'),
    error: userRepos.get('error'),
    user: location.get('pathname').substring(1)
  };
}

export default connect(mapStateToProps, {
  fetchUserPepos
})(UserReposPage);
