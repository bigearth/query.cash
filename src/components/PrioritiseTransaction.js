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

class PrioritiseTransaction extends Component {
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
    // BITBOX.RawTransactions.PrioritiseTransaction(this.state.txid).then((result) => {
    //   this.setState({
    //     data: result
    //   })
    // }, (err) => { console.log(err); });
    e.preventDefault();
  }

  render() {
    return (
      <div className="PrioritiseTransaction">
        <h1 className="PrioritiseTransaction-title">PrioritiseTransaction</h1>
        <p>Coming Soon</p>
        <h2>Command Result</h2>
        <SyntaxHighlighter language='javascript' style={ocean}>{this.state.data}</SyntaxHighlighter>
        <h2>RPC Help</h2>
        <SyntaxHighlighter language='bash' style={ocean}>{`
  Accepts the transaction into mined blocks at a higher (or lower) priority

  Arguments:
  1. "txid"       (string, required) The transaction id.
  2. priority_delta (numeric, required) The priority to add or subtract.
                    The transaction selection algorithm considers the tx as it would have a higher priority.
                    (priority of a transaction is calculated: coinage * value_in_satoshis / txsize)
  3. fee_delta      (numeric, required) The fee value (in satoshis) to add (or subtract, if negative).
                    The fee is not actually paid, only the algorithm for selecting transactions into a block
                    considers the transaction as it would have paid a higher (or lower) fee.

  Result:
  true              (boolean) Returns true

  Examples:
  > bitcoin-cli prioritisetransaction "txid" 0.0 10000
  > curl --user myusername --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "prioritisetransaction", "params": ["txid", 0.0, 10000] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/
        `}</SyntaxHighlighter>
      </div>
    );
  }
}

export default PrioritiseTransaction;
