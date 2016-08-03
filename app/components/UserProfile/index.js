import React from 'react';
import classnames from 'classnames';
import styles from './styles.css';

export default class UserProfile extends React.Component {
  render() {
    let { isFetching, user={} } = this.props.user;

    return (
      <div className={classnames(styles['user-profile'], { 'loading-overlay': isFetching })}>
        <div>{user.name}</div>
      </div>
    );
  }
}
