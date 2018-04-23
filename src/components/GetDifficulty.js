import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import JSONPretty from 'react-json-pretty';

class GetDifficulty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'null'
    };
  }

  handleSubmit(e) {
    this.BITBOX.Blockchain.getDifficulty().then((result) => {
      this.setState({
        data: JSON.stringify(result)
      })
    }, (err) => { console.log(err); });
    e.preventDefault();
  }

  render() {
    return (
      <div className="GetDifficulty">
        <h1 className="GetDifficulty-title">GetDifficulty</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <button type="submit" className="pure-button pure-button-primary">Submit</button>
        </form>
        <h2>Command Result</h2>
        <JSONPretty id="json-pretty" json={this.state.data}></JSONPretty>
        <h2>RPC Help</h2>
        <SyntaxHighlighter language='bash' style={ocean}>{`
  Returns the proof-of-work difficulty as a multiple of the minimum difficulty.

  Result:
  n.nnn       (numeric) the proof-of-work difficulty as a multiple of the minimum difficulty.

  Examples:
  > bitcoin-cli getdifficulty
  > curl --user myusername --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "getdifficulty", "params": [] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/
        `}</SyntaxHighlighter>
      </div>
    );
  }
}

export default GetDifficulty;
