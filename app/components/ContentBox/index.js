import React from 'react';
import styles from './styles.css';

export default class ContentBox extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h3>{this.props.title}</h3>
        {this.props.children}
      </div>
    );
  }
}
