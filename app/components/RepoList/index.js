import React from 'react';
import classnames from 'classnames';
import styles from './styles.css';

export default class RepoList extends React.Component {
  render() {
    let { isFetching, repos=[] } = this.props.repos;

    return (
      <ul className={classnames(styles['repo-list'], { 'loading-overlay': isFetching })}>
        {repos.map(repo => <li key={repo.id}>{repo.full_name}</li>)}
      </ul>
    );
  }
}
