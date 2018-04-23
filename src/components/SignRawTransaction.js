import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import JSONPretty from 'react-json-pretty';

class SignRawTransaction extends Component {
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
    // BITBOX.RawTransactions.SignRawTransaction(this.state.txid).then((result) => {
    //   this.setState({
    //     data: result
    //   })
    // }, (err) => { console.log(err); });
    e.preventDefault();
  }

  render() {
    return (
      <div className="SignRawTransaction">
        <h1 className="SignRawTransaction-title">SignRawTransaction</h1>
        <p>Coming Soon</p>
        <h2>Command Result</h2>
        <JSONPretty id="json-pretty" json={this.state.data}></JSONPretty>
        <h2>RPC Help</h2>
        <SyntaxHighlighter language='bash' style={ocean}>{`
  Sign inputs for raw transaction (serialized, hex-encoded).
  The second optional argument (may be null) is an array of previous transaction outputs that
  this transaction depends on but may not yet be in the block chain.
  The third optional argument (may be null) is an array of base58-encoded private
  keys that, if given, will be the only keys used to sign the transaction.


  Arguments:
  1. "hexstring"     (string, required) The transaction hex string
  2. "prevtxs"       (string, optional) An json array of previous dependent transaction outputs
       [               (json array of json objects, or 'null' if none provided)
         {
           "txid":"id",             (string, required) The transaction id
           "vout":n,                  (numeric, required) The output number
           "scriptPubKey": "hex",   (string, required) script key
           "redeemScript": "hex",   (string, required for P2SH or P2WSH) redeem script
           "amount": value            (numeric, required) The amount spent
         }
         ,...
      ]
  3. "privkeys"     (string, optional) A json array of base58-encoded private keys for signing
      [                  (json array of strings, or 'null' if none provided)
        "privatekey"   (string) private key in base58-encoding
        ,...
      ]
  4. "sighashtype"     (string, optional, default=ALL) The signature hash type. Must be one of
         "ALL"
         "NONE"
         "SINGLE"
         "ALL|ANYONECANPAY"
         "NONE|ANYONECANPAY"
         "SINGLE|ANYONECANPAY"
         "ALL|FORKID"
         "NONE|FORKID"
         "SINGLE|FORKID"
         "ALL|FORKID|ANYONECANPAY"
         "NONE|FORKID|ANYONECANPAY"
         "SINGLE|FORKID|ANYONECANPAY"

  Result:
  {
    "hex" : "value",           (string) The hex-encoded raw transaction with signature(s)
    "complete" : true|false,   (boolean) If the transaction has a complete set of signatures
    "errors" : [                 (json array of objects) Script verification errors (if there are any)
      {
        "txid" : "hash",           (string) The hash of the referenced, previous transaction
        "vout" : n,                (numeric) The index of the output to spent and used as input
        "scriptSig" : "hex",       (string) The hex-encoded signature script
        "sequence" : n,            (numeric) Script sequence number
        "error" : "text"           (string) Verification or signing error related to the input
      }
      ,...
    ]
  }

  Examples:
  > bitcoin-cli signrawtransaction "myhex"
  > curl --user myusername --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "signrawtransaction", "params": ["myhex"] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/
        `}</SyntaxHighlighter>
      </div>
    );
  }
}

export default SignRawTransaction;
