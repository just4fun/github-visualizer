import React from 'react';
import { connect } from 'react-redux';
import { loadRepoPage } from './actions';

export class RepoPage extends React.Component {
  componentWillMount() {
    const { userName, repoName } = this.props;
    this.props.loadRepoPage(userName, repoName);
  }

  render() {
    const { userName, repoName } = this.props;

    return (
      <div className="container">
        This is repo `{repoName}` of {userName}.
      </div>
    );
  }
}

function mapStateToProps(state) {
  const location = state.getIn(['route', 'locationBeforeTransitions']);
  const userState = state.get('user');

  let pathArray = location.get('pathname').split('/');
  const repoName = pathArray.pop();
  const userName = pathArray.pop();

  return {
    userName,
    repoName
  };
}

export default connect(mapStateToProps, {
  loadRepoPage
})(RepoPage);
