import React, { Component } from 'react';
import {
  Link,
} from 'react-router-dom';



class Homepage extends Component {
  render() {
    return (
      <div className='Homepage'>
        <h2>Working</h2>
        <ul>
          <li>
            <Link
              className="pure-menu-link"
              to="/decoderawtransaction">
              DecodeRawTransaction
            </Link>
          </li>
          <li>
            <Link
              className="pure-menu-link"
              to="/getrawtransaction">
              GetRawTransaction
            </Link>
          </li>
        </ul>
        <h2>Not yet working</h2>
        <p>Everything else 😬 Please fork <a className='blue' href='https://github.com/bigearth/query.cash'>the repo</a> and help us build it</p>
      </div>
    );
  }
}

export default Homepage;
