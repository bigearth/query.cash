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

class GetNetTotals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'null'
    };
  }

  handleSubmit(e) {
    BITBOX.Network.getNetTotals(this.state.txid).then((result) => {
      this.setState({
        data: JSON.stringify(result)
      })
    }, (err) => { console.log(err); });
    e.preventDefault();
  }

  render() {
    return (
      <div className="GetNetTotals">
        <h1 className="GetNetTotals-title">GetNetTotals</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <button type="submit" className="pure-button pure-button-primary">Submit</button>
        </form>
        <h2>Command Result</h2>
        <SyntaxHighlighter language='javascript' style={ocean}>{this.state.data}</SyntaxHighlighter>
        <h2>RPC Help</h2>
        <SyntaxHighlighter language='bash' style={ocean}>{`
  Returns information about network traffic, including bytes in, bytes out, and current time.

  Result:
  {
    "totalbytesrecv": n,   (numeric) Total bytes received
    "totalbytessent": n,   (numeric) Total bytes sent
    "timemillis": t,       (numeric) Current UNIX time in milliseconds
    "uploadtarget":
    {
      "timeframe": n,                         (numeric) Length of the measuring timeframe in seconds
      "target": n,                            (numeric) Target in bytes
      "target_reached": true|false,           (boolean) True if target is reached
      "serve_historical_blocks": true|false,  (boolean) True if serving historical blocks
      "bytes_left_in_cycle": t,               (numeric) Bytes left in current time cycle
      "time_left_in_cycle": t                 (numeric) Seconds left in current time cycle
    }
  }

  Examples:
  > bitcoin-cli getnettotals
  > curl --user myusername --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "getnettotals", "params": [] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/
        `}</SyntaxHighlighter>
      </div>
    );
  }
}

export default GetNetTotals;
