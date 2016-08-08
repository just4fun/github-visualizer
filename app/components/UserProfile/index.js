import React from 'react';
import classnames from 'classnames';
import Loading from 'components/Loading';
import ErrorMessage from 'components/ErrorMessage';
import styles from './styles.css';

export default class UserProfile extends React.Component {
  render() {
    let { isFetching, data, error } = this.props.user;
    let user = data || {};

    return (
      <div className={styles['user-profile']}>
        {isFetching && <Loading />}
        {error && <ErrorMessage error={error} />}
        {!isFetching && !error &&
          <div>
            <img src={user.avatar_url} alt={user.name} />
            <div className={styles['name-card']}>
              <div className={styles['full-name']}>{user.name}</div>
              <div className={styles['login-name']}>{user.login}</div>
            </div>
            <p className={styles.bio}>{user.bio}</p>
            <ul className={styles.info}>
              <li>
                <i className="fa fa-users"></i>
                <span>{user.company}</span>
              </li>
              <li>
                <i className="fa fa-map-marker" className={classnames('fa', 'fa-map-marker')}></i>
                <span>{user.location}</span>
              </li>
              <li>
                <i className="fa fa-reply"></i>
                <span><a href={`mailto:${user.email}`} target="_top">{user.email}</a></span>
              </li>
              <li>
                <i className="fa fa-link"></i>
                <span><a href={user.blog} target="_blank">{user.blog}</a></span>
              </li>
              <li>
                <i className="fa fa-clock-o"></i>
                <span>Joined on {new Date(user.created_at).toDateString()}</span>
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
        }
      </div>
    );
  }
}
