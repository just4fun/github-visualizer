import React from 'react';
import { connect } from 'react-redux';
import { loadUserPage } from './actions';

export class UserPage extends React.Component {
  componentWillMount() {
    this.props.loadUserPage(this.props.user);
  }

  render() {
    let { isFetching, repos } = this.props;
    repos = repos || [];

    return (
      <div>
        {isFetching &&
          <h2>Loading repos...</h2>
        }
        {!isFetching && repos.length > 0 &&
          <ul>
            {repos.map(repo => <li key={repo.id}>{repo.full_name}</li>)}
          </ul>
        }
      </div>
    );
  }
}

UserPage.propTypes = {
  isFetching: React.PropTypes.bool,
  repos: React.PropTypes.array,
  error: React.PropTypes.string,
  user: React.PropTypes.string,
  loadUserPage: React.PropTypes.func
};

function mapStateToProps(state) {
  const location = state.getIn(['route', 'locationBeforeTransitions']);
  const user = state.get('user');

  return {
    isFetching: user.get('isFetching'),
    repos: user.get('repos'),
    error: user.get('error'),
    user: location.get('pathname').substring(1)
  };
}

export default connect(mapStateToProps, {
  loadUserPage
})(UserPage);
