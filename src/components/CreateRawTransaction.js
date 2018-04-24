import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import JSONPretty from 'react-json-pretty';

class CreateRawTransaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'null'
    };
  }

  handleInputsChange(e) {
    let value = e.target.value;
    this.setState({
      inputs: value
    });
  }

  handleOutputsChange(e) {
    let value = e.target.value;
    this.setState({
      outputs: value
    });
  }

  handleLocktimeChange(e) {
    let value = e.target.value;
    this.setState({
      locktime: value
    });
  }

  handleSubmit(e) {
    this.props.bitbox.RawTransactions.createRawTransaction(this.state.inputs, this.state.outputs, this.state.locktime).then((result) => {
      this.setState({
        data: result
      })
    }, (err) => { console.log(err); });
    e.preventDefault();
  }

  render() {
    return (
      <div className="CreateRawTransaction">
        <h1 className="CreateRawTransaction-title">CreateRawTransaction</h1>
        <form className="pure-form pure-form-aligned" onSubmit={this.handleSubmit.bind(this)}>
          <fieldset>
            <div className="pure-control-group">
              <div>
                <label>Inputs</label>
                <input onChange={this.handleInputsChange.bind(this)} id="inputs" type="text" placeholder="inputs"/>
              </div>
              <div>
                <label>Outputs</label>
                <input onChange={this.handleOutputsChange.bind(this)} id="outputs" type="text" placeholder="outputs"/>
              </div>
              <div>
                <label>Locktime</label>
                <input onChange={this.handleLocktimeChange.bind(this)} id="locktime" type="text" placeholder="locktime"/>
              </div>
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
  createrawtransaction [{"txid":"id","vout":n},...] {"address":amount,"data":"hex",...} ( locktime )

  Create a transaction spending the given inputs and creating new outputs.
  Outputs can be addresses or data.
  Returns hex-encoded raw transaction.
  Note that the transaction's inputs are not signed, and
  it is not stored in the wallet or transmitted to the network.

  Arguments:
  1. "inputs"                (array, required) A json array of json objects
       [
         {
           "txid":"id",    (string, required) The transaction id
           "vout":n,         (numeric, required) The output number
           "sequence":n      (numeric, optional) The sequence number
         }
         ,...
       ]
  2. "outputs"               (object, required) a json object with outputs
      {
        "address": x.xxx,    (numeric or string, required) The key is the bitcoin address, the numeric value (can be string) is the BCH amount
        "data": "hex"      (string, required) The key is "data", the value is hex encoded data
        ,...
      }
  3. locktime                  (numeric, optional, default=0) Raw locktime. Non-0 value also locktime-activates inputs

  Result:
  "transaction"              (string) hex string of the transaction

  Examples:
  > bitcoin-cli createrawtransaction "[{\"txid\":\"myid\",\"vout\":0}]" "{\"address\":0.01}"
  > bitcoin-cli createrawtransaction "[{\"txid\":\"myid\",\"vout\":0}]" "{\"data\":\"00010203\"}"
  > curl --user myusername --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "createrawtransaction", "params": ["[{\"txid\":\"myid\",\"vout\":0}]", "{\"address\":0.01}"] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/
  > curl --user myusername --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "createrawtransaction", "params": ["[{\"txid\":\"myid\",\"vout\":0}]", "{\"data\":\"00010203\"}"] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/
        `}</SyntaxHighlighter>
      </div>
    );
  }
}

export default CreateRawTransaction;
