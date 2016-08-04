import React from 'react';
import { connect } from 'react-redux';
import { loadUserPage } from './actions';
import UserProfile from 'components/UserProfile';

export class UserPage extends React.Component {
  componentWillMount() {
    this.props.loadUserPage(this.props.userName);
  }

  render() {
    const { userInfo } = this.props;

    return (
      <div className="container">
        <UserProfile user={userInfo} />
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
