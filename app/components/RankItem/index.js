import React from 'react';
import styles from './styles.css';

export default class RankItem extends React.Component {
  render() {
    let { user } = this.props;

    return (
      <div className={styles.item}>
        <a target="_blank" href={user.html_url}>
          <img src={user.avatar_url} className={styles.avatar} alt={user.login} />
        </a>
        <span>{user.login}</span>
      </div>
    );
  }
}
