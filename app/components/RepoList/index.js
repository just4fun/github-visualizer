import React from 'react';
import styles from './styles.css';

export default class RepoList extends React.Component {
  render() {
    let { isFetching, data } = this.props.repos;
    let repos = data || [];

    return (
      <ul className={styles['repo-list']}>
        {repos.map(repo => <li key={repo.id}>{repo.full_name}</li>)}
      </ul>
    );
  }
}
