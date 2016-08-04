import React from 'react';
import Loading from 'components/Loading';
import classnames from 'classnames';
import styles from './styles.css';

export default class UserProfile extends React.Component {
  render() {
    let { isFetching, data } = this.props.user;
    let user = data || {};

    if (isFetching) {
      return <Loading />;
    }

    return (
      <div className={styles['user-profile']}>
        <img src={user.avatar_url} alt={user.name} />
        <div className={styles['name-card']}>
          <div className={styles['full-name']}>{user.name}</div>
          <div className={styles['login-name']}>{user.login}</div>
        </div>
        <div className={styles.bio}>{user.bio}</div>
        <ul className={styles.info}>
          <li>
            <i className="fa fa-users"></i>
            {user.company}
          </li>
          <li>
            <i className="fa fa-map-marker" className={classnames('fa', 'fa-map-marker', styles.location)}></i>
            {user.location}
          </li>
          <li>
            <i className="fa fa-reply"></i>
            <a href={`mailto:${user.email}`} target="_top">{user.email}</a>
          </li>
          <li>
            <i className="fa fa-link"></i>
            <a href={user.blog} target="_blank">{user.blog}</a>
          </li>
          <li>
            <i className="fa fa-clock-o"></i>
            Joined on {new Date(user.created_at).toDateString()}
          </li>
        </ul>
        <div className={styles.stat}>
          <div>
            <strong>
              <a href="#">{user.followers}</a>
            </strong>
            <span>followers</span>
          </div>
          <div>
            <strong>
              <a href="about:blank">{user.following}</a>
            </strong>
            <span>following</span>
          </div>
        </div>
      </div>
    );
  }
}
