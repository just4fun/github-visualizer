/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.css';
import { findDOMNode } from 'react-dom';
import { push } from 'react-router-redux';

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.goSearch = this.goSearch.bind(this);
  }

  render() {
    return (
      <div className={styles.main}>
        <input placeholder="Type account name here" className={styles.account} ref="input" />
        <button className={styles.button} onClick={this.goSearch}>Let's go</button>
      </div>
    );
  }

  getInputValue() {
    return findDOMNode(this.refs.input).value;
  }

  goSearch() {
    const user = this.getInputValue().trim();
    if (user) {
      this.props.changeRoute(`/${user}`);
    }
  }
}

HomePage.propTypes = {
  changeRoute: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: url => dispatch(push(url))
  };
}

export default connect(null, mapDispatchToProps)(HomePage);
