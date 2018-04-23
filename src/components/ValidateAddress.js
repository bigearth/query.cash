import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import JSONPretty from 'react-json-pretty';

class ValidateAddress extends Component {
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
    BITBOX.Util.ValidateAddress(this.state.address).then((result) => {
      this.setState({
        data: result
      })
    }, (err) => { console.log(err); });
    e.preventDefault();
  }

  render() {
    return (
      <div className="ValidateAddress">
        <h1 className="ValidateAddress-title">ValidateAddress</h1>
        <form className="pure-form pure-form-aligned" onSubmit={this.handleSubmit.bind(this)}>
            <fieldset>
                <div className="pure-control-group">
                    <label>Address</label>
                    <input onChange={this.handleInputChange.bind(this)} id="name" type="text" placeholder="Address"/>
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
  Return information about the given bitcoin address.

  Arguments:
  1. "address"     (string, required) The bitcoin address to validate

  Result:
  {
    "isvalid" : true|false,       (boolean) If the address is valid or not. If not, this is the only property returned.
    "address" : "address", (string) The bitcoin address validated
    "scriptPubKey" : "hex",       (string) The hex encoded scriptPubKey generated by the address
    "ismine" : true|false,        (boolean) If the address is yours or not
    "iswatchonly" : true|false,   (boolean) If the address is watchonly
    "isscript" : true|false,      (boolean) If the key is a script
    "pubkey" : "publickeyhex",    (string) The hex value of the raw public key
    "iscompressed" : true|false,  (boolean) If the address is compressed
    "account" : "account"         (string) DEPRECATED. The account associated with the address, "" is the default account
    "timestamp" : timestamp,        (number, optional) The creation time of the key if available in seconds since epoch (Jan 1 1970 GMT)
    "hdkeypath" : "keypath"       (string, optional) The HD keypath if the key is HD and available
    "hdmasterkeyid" : "<hash160>" (string, optional) The Hash160 of the HD master pubkey
  }

  Examples:
  > bitcoin-cli validateaddress "1PSSGeFHDnKNxiEyFrD1wcEaHr9hrQDDWc"
  > curl --user myusername --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "validateaddress", "params": ["1PSSGeFHDnKNxiEyFrD1wcEaHr9hrQDDWc"] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/
        `}</SyntaxHighlighter>
      </div>
    );
  }
}

export default ValidateAddress;
