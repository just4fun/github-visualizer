import React from 'react';

export default class UserProfile extends React.Component {
  render() {
    let { isFetching, user } = this.props.user;

    return (
      <div>
        {isFetching &&
          <h2>Loading user profile...</h2>
        }
        {!isFetching && user &&
          <div>{user.name}</div>
        }
      </div>
    );
  }
}

UserProfile.propTypes = {
  user: React.PropTypes.object
};
