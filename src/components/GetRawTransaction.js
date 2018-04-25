import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import JSONPretty from 'react-json-pretty';

class GetRawTransaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      verbose: false,
      txid: '',
      data: 'null'
    };
  }

  handleVerboseChange(e){
    this.setState({
      verbose: !this.state.verbose
    });
  }

  handleInputChange(e) {
    let value = e.target.value;
    this.setState({
      txid: value
    });
  }

  handleSubmit(e) {
    this.props.bitbox.RawTransactions.getRawTransaction(this.state.txid, this.state.verbose).then((result) => {
      this.setState({
        data: result
      })
    }, (err) => { console.log('foo', err); });
    e.preventDefault();
  }

  render() {
    return (
      <div className="GetRawTransaction">
        <h1 className="GetRawTransaction-title">GetRawTransaction</h1>
        <form className="pure-form pure-form-aligned" onSubmit={this.handleSubmit.bind(this)}>
          <fieldset>
            <div className="pure-control-group">
              <label>TXID</label>
              <input onChange={this.handleInputChange.bind(this)} id="name" type="text" placeholder="TXID"/>
              <div>
                <label>Verbose</label>
                <input onChange={this.handleVerboseChange.bind(this)} id="verbose"  type="radio" name="verbose" value="true" checked={this.state.verbose} /> true
                <input onChange={this.handleVerboseChange.bind(this)} id="verbose" type="radio" name="verbose" value="false" checked={!this.state.verbose}/> false
              </div>
            </div>
            <div className="pure-controls">
              <button type="submit" className="pure-button pure-button-primary">Submit</button>
            </div>
          </fieldset>
        </form>
        <h2>Command Result</h2>
        <JSONPretty id="json-pretty" json={this.state.data}></JSONPretty>
        <h2>RPC Help</h2>
        <SyntaxHighlighter language='bash' style={ocean}>{`
  NOTE: By default this function only works for mempool transactions. If the -txindex option is enabled, it also works for blockchain transactions.
  DEPRECATED: for now, it also works for transactions with unspent outputs.

  Return the raw transaction data.

  If verbose is 'true', returns an Object with information about 'txid'.
  If verbose is 'false' or omitted, returns a string that is serialized, hex-encoded data for 'txid'.

  Arguments:
  1. "txid"      (string, required) The transaction id
  2. verbose       (bool, optional, default=false) If false, return a string, otherwise return a json object

  Result (if verbose is not set or set to false):
  "data"      (string) The serialized, hex-encoded data for 'txid'

  Result (if verbose is set to true):
  {
    "hex" : "data",       (string) The serialized, hex-encoded data for 'txid'
    "txid" : "id",        (string) The transaction id (same as provided)
    "hash" : "id",        (string) The transaction hash (differs from txid for witness transactions)
    "size" : n,             (numeric) The serialized transaction size
    "version" : n,          (numeric) The version
    "locktime" : ttt,       (numeric) The lock time
    "vin" : [               (array of json objects)
       {
         "txid": "id",    (string) The transaction id
         "vout": n,         (numeric)
         "scriptSig": {     (json object) The script
           "asm": "asm",  (string) asm
           "hex": "hex"   (string) hex
         },
         "sequence": n      (numeric) The script sequence number
       }
       ,...
    ],
    "vout" : [              (array of json objects)
       {
         "value" : x.xxx,            (numeric) The value in BCH
         "n" : n,                    (numeric) index
         "scriptPubKey" : {          (json object)
           "asm" : "asm",          (string) the asm
           "hex" : "hex",          (string) the hex
           "reqSigs" : n,            (numeric) The required sigs
           "type" : "pubkeyhash",  (string) The type, eg 'pubkeyhash'
           "addresses" : [           (json array of string)
             "address"        (string) bitcoin address
             ,...
           ]
         }
       }
       ,...
    ],
    "blockhash" : "hash",   (string) the block hash
    "confirmations" : n,      (numeric) The confirmations
    "time" : ttt,             (numeric) The transaction time in seconds since epoch (Jan 1 1970 GMT)
    "blocktime" : ttt         (numeric) The block time in seconds since epoch (Jan 1 1970 GMT)
  }

  Examples:
  > bitcoin-cli getrawtransaction "mytxid"
  > bitcoin-cli getrawtransaction "mytxid" true
  > curl --user myusername --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "getrawtransaction", "params": ["mytxid", true] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/
        `}</SyntaxHighlighter>
      </div>
    );
  }
}

export default GetRawTransaction;
