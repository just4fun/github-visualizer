import React from 'react';
import { connect } from 'react-redux';
import { loadUserPage } from './actions';
import UserProfile from 'components/UserProfile';
import RepoList from 'components/RepoList';
import styles from './styles.css';

export class UserPage extends React.Component {
  componentWillMount() {
    this.props.loadUserPage(this.props.userName);
  }

  render() {
    const { userInfo, repos } = this.props;

    return (
      <div className={styles.container}>
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
    userName: location.get('pathname').substring(1),
    repos: userState.repos.toJS()
  };
}

export default connect(mapStateToProps, {
  loadUserPage
})(UserPage);
