import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import JSONPretty from 'react-json-pretty';

class DecodeRawTransaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hex: '',
      data: 'null'
    };
  }

  handleInputChange(e) {
    let value = e.target.value;
    this.setState({
      hex: value
    });
  }

  handleSubmit(e) {
    this.props.bitbox.RawTransactions.decodeRawTransaction(this.state.hex).then((result) => {
      this.setState({
        data: result
      })
    }, (err) => { console.log(err); });
    e.preventDefault();
  }


  render() {
    return (
      <div className="DecodeRawTransaction">
        <h1 className="DecodeRawTransaction-title">DecodeRawTransaction</h1>
        <form className="pure-form pure-form-aligned" onSubmit={this.handleSubmit.bind(this)}>
          <fieldset>
            <div className="pure-control-group">
              <label>Raw Hex</label>
              <input onChange={this.handleInputChange.bind(this)} id="name" type="text" placeholder="Raw Hex" />
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
  decoderawtransaction "hexstring"

  Return a JSON object representing the serialized, hex-encoded transaction.

  Arguments:
  1. "hexstring"      (string, required) The transaction hex string

  Result:
  {
    "txid" : "id",        (string) The transaction id
    "hash" : "id",        (string) The transaction hash (differs from txid for witness transactions)
    "size" : n,             (numeric) The transaction size
    "version" : n,          (numeric) The version
    "locktime" : ttt,       (numeric) The lock time
    "vin" : [               (array of json objects)
       {
         "txid": "id",    (string) The transaction id
         "vout": n,         (numeric) The output number
         "scriptSig": {     (json object) The script
           "asm": "asm",  (string) asm
           "hex": "hex"   (string) hex
         },
         "sequence": n     (numeric) The script sequence number
       }
       ,...
    ],
    "vout" : [             (array of json objects)
       {
         "value" : x.xxx,            (numeric) The value in BCH
         "n" : n,                    (numeric) index
         "scriptPubKey" : {          (json object)
           "asm" : "asm",          (string) the asm
           "hex" : "hex",          (string) the hex
           "reqSigs" : n,            (numeric) The required sigs
           "type" : "pubkeyhash",  (string) The type, eg 'pubkeyhash'
           "addresses" : [           (json array of string)
             "12tvKAXCxZjSmdNbao16dKXC8tRWfcF5oc"   (string) bitcoin address
             ,...
           ]
         }
       }
       ,...
    ],
  }

  Examples:
  > bitcoin-cli decoderawtransaction "hexstring"
  > curl --user myusername --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "decoderawtransaction", "params": ["hexstring"] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/
        `}</SyntaxHighlighter>
      </div>
    );
  }
}

export default DecodeRawTransaction;
