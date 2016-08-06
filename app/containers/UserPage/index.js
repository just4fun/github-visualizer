import React from 'react';
import { connect } from 'react-redux';
import { loadUserPage } from './actions';
import UserProfile from 'components/UserProfile';
import RepoList from 'components/RepoList';

export class UserPage extends React.Component {
  componentWillMount() {
    this.props.loadUserPage(this.props.userName);
  }

  render() {
    const { userInfo, repos } = this.props;

    return (
      <div className="container">
        <UserProfile user={userInfo} />
        <RepoList repos={repos} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const location = state.getIn(['route', 'locationBeforeTransitions']);
  const userState = state.get('user');

  return {
    userInfo: userState.info.toJS(),
    userName: location.get('pathname').split('/').pop(),
    repos: userState.repos.toJS()
  };
}

export default connect(mapStateToProps, {
  loadUserPage
})(UserPage);
