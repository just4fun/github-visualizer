import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <header>
        <div>
          <h2>
            <Link to="/">visualizer</Link>
          </h2>
          <nav></nav>
        </div>
      </header>
    );
  }
}
