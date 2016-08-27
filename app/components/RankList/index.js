import React from 'react';
import Loading from 'components/Loading';
import ErrorMessage from 'components/ErrorMessage';
import RankItem from 'components/RankItem';

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
          data.items.map(user => <RankItem key={user.id} user={user} />)
        }
      </div>
    );
  }
}
