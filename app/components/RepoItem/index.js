import React from 'react';
import { Link } from 'react-router';
import styles from './styles.css';

export default class RepoItem extends React.Component {
  render() {
    let { repo } = this.props;

    return (
      <li className={styles['repo-item']}>
        <Link to={`/users/${repo.owner.login}/${repo.name}`}>
          <div className={styles['repo-desc']}>
            <h4>{repo.name}</h4>
            <p>{repo.description}</p>
          </div>
          <div className={styles['repo-stat']}>
            <span>{repo.stargazers_count}</span>
            <i className="fa fa-star"></i>
          </div>
        </Link>
      </li>
    );
  }
}
