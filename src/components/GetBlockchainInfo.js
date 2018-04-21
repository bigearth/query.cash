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

class GetBlockchainInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'null'
    };
  }

  handleSubmit(e) {
    BITBOX.Blockchain.getBlockchainInfo(this.state.txid).then((result) => {
      this.setState({
        data: JSON.stringify(result)
      })
    }, (err) => { console.log(err); });
    e.preventDefault();
  }

  render() {
    return (
      <div className="GetBlockchainInfo">
        <h1 className="GetBlockchainInfo-title">GetBlockchainInfo</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <button type="submit" className="pure-button pure-button-primary">Submit</button>
        </form>
        <h2>Command Result</h2>
        <SyntaxHighlighter language='javascript' style={ocean}>{this.state.data}</SyntaxHighlighter>
        <h2>RPC Help</h2>
        <SyntaxHighlighter language='bash' style={ocean}>{`
  Returns an object containing various state info regarding blockchain processing.

  Result:
  {
    "chain": "xxxx",        (string) current network name as defined in BIP70 (main, test, regtest)
    "blocks": xxxxxx,         (numeric) the current number of blocks processed in the server
    "headers": xxxxxx,        (numeric) the current number of headers we have validated
    "bestblockhash": "...", (string) the hash of the currently best block
    "difficulty": xxxxxx,     (numeric) the current difficulty
    "mediantime": xxxxxx,     (numeric) median time for the current best block
    "verificationprogress": xxxx, (numeric) estimate of verification progress [0..1]
    "chainwork": "xxxx"     (string) total amount of work in active chain, in hexadecimal
    "pruned": xx,             (boolean) if the blocks are subject to pruning
    "pruneheight": xxxxxx,    (numeric) lowest-height complete block stored
    "softforks": [            (array) status of softforks in progress
       {
          "id": "xxxx",        (string) name of softfork
          "version": xx,         (numeric) block version
          "reject": {            (object) progress toward rejecting pre-softfork blocks
             "status": xx,       (boolean) true if threshold reached
          },
       }, ...
    ],
    "bip9_softforks": {          (object) status of BIP9 softforks in progress
       "xxxx" : {                (string) name of the softfork
          "status": "xxxx",    (string) one of "defined", "started", "locked_in", "active", "failed"
          "bit": xx,             (numeric) the bit (0-28) in the block version field used to signal this softfork (only for "started" status)
          "startTime": xx,       (numeric) the minimum median time past of a block at which the bit gains its meaning
          "timeout": xx,         (numeric) the median time past of a block at which the deployment is considered failed if not yet locked in
          "since": xx            (numeric) height of the first block to which the status applies
       }
    }
  }

  Examples:
  > bitcoin-cli getblockchaininfo
  > curl --user myusername --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "getblockchaininfo", "params": [] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/
        `}</SyntaxHighlighter>
      </div>
    );
  }
}

export default GetBlockchainInfo;
