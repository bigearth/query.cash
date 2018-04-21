import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';

let BITBOXCli = require('bitbox-cli/lib/bitboxcli').default;
let BITBOX = new BITBOXCli({
  protocol: 'http',
  host: '138.68.54.100',
  port: 8332,
  username: 'bitcoin',
  password: 'xhFjluMJMyOXcYvF',
  corsproxy: true
});

class GetChainTips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'null'
    };
  }

  handleSubmit(e) {
    BITBOX.Blockchain.getChainTips(this.state.txid).then((result) => {
      this.setState({
        data: JSON.stringify(result)
      })
    }, (err) => { console.log(err); });
    e.preventDefault();
  }

  render() {
    return (
      <div className="GetChainTips">
        <h1 className="GetChainTips-title">GetChainTips</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <button type="submit" className="pure-button pure-button-primary">Submit</button>
        </form>
        <h2>Command Result</h2>
        <SyntaxHighlighter language='javascript' style={ocean}>{this.state.data}</SyntaxHighlighter>
        <h2>RPC Help</h2>
        <SyntaxHighlighter language='bash' style={ocean}>{`
  Return information about all known tips in the block tree, including the main chain as well as orphaned branches.

  Result:
  [
    {
      "height": xxxx,         (numeric) height of the chain tip
      "hash": "xxxx",         (string) block hash of the tip
      "branchlen": 0          (numeric) zero for main chain
      "status": "active"      (string) "active" for the main chain
    },
    {
      "height": xxxx,
      "hash": "xxxx",
      "branchlen": 1          (numeric) length of branch connecting the tip to the main chain
      "status": "xxxx"        (string) status of the chain (active, valid-fork, valid-headers, headers-only, invalid)
    }
  ]
  Possible values for status:
  1.  "invalid"               This branch contains at least one invalid block
  2.  "headers-only"          Not all blocks for this branch are available, but the headers are valid
  3.  "valid-headers"         All blocks are available for this branch, but they were never fully validated
  4.  "valid-fork"            This branch is not part of the active chain, but is fully validated
  5.  "active"                This is the tip of the active main chain, which is certainly valid

  Examples:
  > bitcoin-cli getchaintips
  > curl --user myusername --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "getchaintips", "params": [] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/
        `}</SyntaxHighlighter>
      </div>
    );
  }
}

export default GetChainTips;
