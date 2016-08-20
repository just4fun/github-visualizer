import React from 'react';
import classnames from 'classnames';
import Loading from 'components/Loading';
import ErrorMessage from 'components/ErrorMessage';
import styles from './styles.css';

export default class RankList extends React.Component {
  render() {
    let { isFetching, data, error } = this.props.result;
    data = data || {
      items: []
    };

    return (
      <div>
        {isFetching && <Loading />}
        {error && <ErrorMessage error={error} />}
        {!isFetching && !error &&
          <ul>
            {data.items.map(user => <li key={user.id}>{user.login}</li>)}
          </ul>
        }
      </div>
    );
  }
}
