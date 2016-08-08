import React from 'react';
import { connect } from 'react-redux';
import { loadRepoPage } from './actions';
import ContentBox from 'components/ContentBox';
import ContributionChart from 'components/ContributionChart';

export class RepoPage extends React.Component {
  componentWillMount() {
    const { userName, repoName } = this.props;
    this.props.loadRepoPage(userName, repoName);
  }

  render() {
    const { title, commits } = this.props;

    return (
      <div className="container">
        <ContentBox title={title}>
          <ContributionChart commits={commits} />
        </ContentBox>
      </div>
    );
  }
}

function getChartTitle(commits) {
  const total = getTotalNumber(commits);
  return `${total} contributions in the last year`;
}

function getTotalNumber(commits) {
  if (commits.isFetching) { return 0; }

  if (!commits.data || !commits.data.length) { return 0; }

  // http://stackoverflow.com/questions/5732043/javascript-reduce-on-array-of-objects
  return commits.data.reduce((sum, current) => sum + current.total, 0);
}

function mapStateToProps(state) {
  const location = state.getIn(['route', 'locationBeforeTransitions']);
  let pathArray = location.get('pathname').split('/');
  const repoName = pathArray.pop();
  const userName = pathArray.pop();

  const repoState = state.get('repo');
  const commits = repoState.commits.toJS();

  return {
    userName,
    repoName,
    commits,
    title: getChartTitle(commits)
  };
}

export default connect(mapStateToProps, {
  loadRepoPage
})(RepoPage);
