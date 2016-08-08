import React from 'react';
import styles from './styles.css';

export default class Loading extends React.Component {
  render() {
    return (
      <div className={styles.error}>
        {this.props.error.message || 'Failed.'}
      </div>
    );
  }
}
