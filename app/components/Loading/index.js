import React from 'react';
import styles from './styles.css';

export default class Loading extends React.Component {
  render() {
    return (
      <div className={styles.loading}>
        <i className="fa fa-cog fa-spin fa-3x fa-fw"></i>
        <span>{this.props.children || 'Loading...'}</span>
      </div>
    );
  }
}
