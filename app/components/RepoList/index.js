import React from 'react';
import ContentBox from 'components/ContentBox';
import Loading from 'components/Loading';
import RepoItem from 'components/RepoItem';
import styles from './styles.css';

export default class RepoList extends React.Component {
  render() {
    let { isFetching, data } = this.props.repos;
    let repos = data || [];

    return (
      <ContentBox title="Repositories">
        {isFetching &&
          <Loading />
          ||
          <ul className={styles['repo-list']}>
            {repos.map(repo => <RepoItem key={repo.id} repo={repo} />)}
          </ul>
        }
      </ContentBox>
    );
  }
}
