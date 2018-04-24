import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import JSONPretty from 'react-json-pretty';

class PrioritiseTransaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'null'
    };
  }

  handleTransactionIdChange(e) {
    let value = e.target.value;
    this.setState({
      txid: value
    });
  }

  handlePriorityDeltaChange(e) {
    let value = e.target.value;
    this.setState({
      priority_delta: value
    });
  }

  handleFeeDeltaChange(e) {
    let value = e.target.value;
    this.setState({
      fee_delta: value
    });
  }

  handleInputChange(e) {
    let value = e.target.value;
    this.setState({
      txid: value
    });
  }

  handleSubmit(e) {
    this.props.bitbox.Mining.prioritiseTransaction(this.state.txid, this.state.priority_delta, this.state.fee_delta).then((result) => {
      this.setState({
        data: result
      })
    }, (err) => { console.log(err); });
    e.preventDefault();
  }

  render() {
    return (
      <div className="PrioritiseTransaction">
        <h1 className="PrioritiseTransaction-title">PrioritiseTransaction</h1>
        <form className="pure-form pure-form-aligned" onSubmit={this.handleSubmit.bind(this)}>
          <fieldset>
            <div className="pure-control-group">
              <div>
                <label>Transaction ID</label>
                <input onChange={this.handleTransactionIdChange.bind(this)} id="txid" type="text" placeholder="Transaction Id"/>
              </div>
              <div>
                <label>Priority Delta</label>
                <input onChange={this.handlePriorityDeltaChange.bind(this)} id="priority_delta" type="number" placeholder="Prioirty Delta"/>
              </div>
              <div>
                <label>Fee Delta</label>
                <input onChange={this.handleFeeDeltaChange.bind(this)} id="fee_delta" type="number" placeholder="Fee Delta"/>
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
