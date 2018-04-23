import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import JSONPretty from 'react-json-pretty';

class GetInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'null'
    };
  }

  handleSubmit(e) {
    this.props.bitbox.Control.getInfo().then((result) => {
      this.setState({
        data: JSON.stringify(result)
      })
    }, (err) => { console.log(err); });
    e.preventDefault();
  }

  render() {
    return (
      <div className="GetInfo">
        <h1 className="GetInfo-title">GetInfo</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <button type="submit" className="pure-button pure-button-primary">Submit</button>
        </form>
        <h2>Command Result</h2>
        <JSONPretty id="json-pretty" json={this.state.data}></JSONPretty>
        <h2>RPC Help</h2>
        <SyntaxHighlighter language='bash' style={ocean}>{`
  DEPRECATED. Returns an object containing various state info.

  Result:
  {
    "version": xxxxx,           (numeric) the server version
    "protocolversion": xxxxx,   (numeric) the protocol version
    "walletversion": xxxxx,     (numeric) the wallet version
    "balance": xxxxxxx,         (numeric) the total bitcoin balance of the wallet
    "blocks": xxxxxx,           (numeric) the current number of blocks processed in the server
    "timeoffset": xxxxx,        (numeric) the time offset
    "connections": xxxxx,       (numeric) the number of connections
    "proxy": "host:port",     (string, optional) the proxy used by the server
    "difficulty": xxxxxx,       (numeric) the current difficulty
    "testnet": true|false,      (boolean) if the server is using testnet or not
    "keypoololdest": xxxxxx,    (numeric) the timestamp (seconds since Unix epoch) of the oldest pre-generated key in the key pool
    "keypoolsize": xxxx,        (numeric) how many new keys are pre-generated
    "unlocked_until": ttt,      (numeric) the timestamp in seconds since epoch (midnight Jan 1 1970 GMT) that the wallet is unlocked for transfers, or 0 if the wallet is locked
    "paytxfee": x.xxxx,         (numeric) the transaction fee set in BCH/kB
    "relayfee": x.xxxx,         (numeric) minimum relay fee for non-free transactions in BCH/kB
    "errors": "..."           (string) any error messages
  }

  Examples:
  > bitcoin-cli getinfo
  > curl --user myusername --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "getinfo", "params": [] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/
        `}</SyntaxHighlighter>
      </div>
    );
  }
}

export default GetInfo;
