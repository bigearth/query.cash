import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import JSONPretty from 'react-json-pretty';

let BITBOXCli = require('bitbox-cli/lib/bitboxcli').default;
let BITBOX = new BITBOXCli({
  protocol: 'http',
  host: '138.68.54.100',
  port: 8332,
  username: 'bitcoin',
  password: 'xhFjluMJMyOXcYvF',
  corsproxy: true
});

class SubmitBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'null'
    };
  }

  handleInputChange(e) {
    let value = e.target.value;
    this.setState({
      txid: value
    });
  }

  handleSubmit(e) {
    BITBOX.Mining.SubmitBlock(this.state.hexdata).then((result) => {
      this.setState({
        data: result
      })
    }, (err) => { console.log(err); });
    e.preventDefault();
  }

  render() {
    return (
      <div className="SubmitBlock">
        <h1 className="SubmitBlock-title">SubmitBlock</h1>
        <form className="pure-form pure-form-aligned" onSubmit={this.handleSubmit.bind(this)}>
            <fieldset>
                <div className="pure-control-group">
                    <label>Raw Hex</label>
                    <input onChange={this.handleInputChange.bind(this)} id="name" type="text" placeholder="hexdata"/>
                    <label>Parameters</label>
                    <input onChange={this.handleInputChange.bind(this)} id="name" type="text" placeholder="parameters"/>
                </div>
                <div>
                    <button type="submit" className="pure-button pure-button-primary">Submit</button>
                </div>
            </fieldset>
        </form>
        <h2>Command Result</h2>
        <JSONPretty id="json-pretty" json={this.state.data}></JSONPretty>
        <h2>RPC Help</h2>
        <SyntaxHighlighter language='bash' style={ocean}>{`
  Attempts to submit new block to network.
  The 'jsonparametersobject' parameter is currently ignored.
  See https://en.bitcoin.it/wiki/BIP_0022 for full specification.

  Arguments
  1. "hexdata"        (string, required) the hex-encoded block data to submit
  2. "parameters"     (string, optional) object of optional parameters
      {
        "workid" : "id"    (string, optional) if the server provided a workid, it MUST be included with submissions
      }

  Result:

  Examples:
  > bitcoin-cli submitblock "mydata"
  > curl --user myusername --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "submitblock", "params": ["mydata"] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/
        `}</SyntaxHighlighter>
      </div>
    );
  }
}

export default SubmitBlock;
