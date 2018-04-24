import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import JSONPretty from 'react-json-pretty';

class GetTxOut extends Component {
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
    // BITBOX.RawTransactions.GetTxOut(this.state.txid).then((result) => {
    //   this.setState({
    //     data: result
    //   })
    // }, (err) => { console.log(err); });
    e.preventDefault();
  }

  render() {
    return (
      <div className="GetTxOut">
        <h1 className="GetTxOut-title">GetTxOut</h1>
        <p>Coming Soon</p>
        <h2>Command Result</h2>
        <JSONPretty id="json-pretty" json={this.state.data}></JSONPretty>
        <h2>RPC Help</h2>
        <SyntaxHighlighter language='bash' style={ocean}>{`
  Returns details about an unspent transaction output.

  Arguments:
  1. "txid"             (string, required) The transaction id
  2. "n"                (numeric, required) vout number
  3. "include_mempool"  (boolean, optional) Whether to include the mempool. Default: true.     Note that an unspent output that is spent in the mempool won't appear.

  Result:
  {
    "bestblock" : "hash",    (string) the block hash
    "confirmations" : n,       (numeric) The number of confirmations
    "value" : x.xxx,           (numeric) The transaction value in BCH
    "scriptPubKey" : {         (json object)
       "asm" : "code",       (string)
       "hex" : "hex",        (string)
       "reqSigs" : n,          (numeric) Number of required signatures
       "type" : "pubkeyhash", (string) The type, eg pubkeyhash
       "addresses" : [          (array of string) array of bitcoin addresses
          "address"     (string) bitcoin address
          ,...
       ]
    },
    "coinbase" : true|false   (boolean) Coinbase or not
  }

  Examples:

  Get unspent transactions
  > bitcoin-cli listunspent

  View the details
  > bitcoin-cli gettxout "txid" 1

  As a json rpc call
  > curl --user myusername --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "gettxout", "params": ["txid", 1] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/
        `}</SyntaxHighlighter>
      </div>
    );
  }
}

export default GetTxOut;
