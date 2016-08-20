import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div>
          <h2>
            <Link to="/">visualizer</Link>
          </h2>
          <nav>
            <ul>
              <li>
                <Link to="/search">Search</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
