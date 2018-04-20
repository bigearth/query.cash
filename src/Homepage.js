import React, { Component } from 'react';

class Homepage extends Component {
  render() {
    return (
      <div>
        <h2>Working</h2>
        <ul>
          <li>DecodeRawTransaction</li>
          <li>GetRawTransaction</li>
        </ul>
        <h2>Not yet working</h2>
        <p>Everything else 😬 Please fork <a href='https://github.com/bigearth/query.cash'>the repo</a> and help us build it</p>
      </div>
    );
  }
}

export default Homepage;
