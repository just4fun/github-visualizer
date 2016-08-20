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
import { findDOMNode } from 'react-dom';
import { push } from 'react-router-redux';
import classnames from 'classnames';
import styles from './styles.css';

export class HomePage extends React.Component {
  static propTypes = {
    changeRoute: React.PropTypes.func
  }

  constructor(props) {
    super(props);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  render() {
    return (
      <div className={styles.main}>
        <div className={styles.jumbotron}>
          <h1>GitHub Visualizer</h1>
          <p>Yet another GitHub visualizer written in latest frontend stuff with D3.</p>
        </div>
        <input type='text' placeholder="Type account name here" className={styles.account} onKeyUp={this.handleKeyUp} ref="input" />
        <button className={classnames(styles.button, 'btn-submit')} onClick={this.handleSearch}>Let's go</button>
      </div>
    );
  }

  getInputValue() {
    return findDOMNode(this.refs.input).value;
  }

  handleKeyUp(e) {
    if (e.keyCode === 13) {
      this.handleSearch();
    }
  }

  handleSearch() {
    const user = this.getInputValue().trim();
    if (user) {
      this.props.changeRoute(`/users/${user}`);
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: url => dispatch(push(url))
  };
}

export default connect(null, mapDispatchToProps)(HomePage);
