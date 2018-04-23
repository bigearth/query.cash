import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import JSONPretty from 'react-json-pretty';

class EstimateFee extends Component {
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
    // BITBOX.RawTransactions.EstimateFee(this.state.txid).then((result) => {
    //   this.setState({
    //     data: result
    //   })
    // }, (err) => { console.log(err); });
    e.preventDefault();
  }

  render() {
    return (
      <div className="EstimateFee">
        <h1 className="EstimateFee-title">EstimateFee</h1>
        <p>Coming Soon</p>
        <h2>Command Result</h2>
        <JSONPretty id="json-pretty" json={this.state.data}></JSONPretty>
        <h2>RPC Help</h2>
        <SyntaxHighlighter language='bash' style={ocean}>{`
  estimatefee nblocks

  Estimates the approximate fee per kilobyte needed for a transaction to begin
  confirmation within nblocks blocks.

  Arguments:
  1. nblocks     (numeric, required)

  Result:
  n              (numeric) estimated fee-per-kilobyte

  A negative value is returned if not enough transactions and blocks
  have been observed to make an estimate.
  -1 is always returned for nblocks == 1 as it is impossible to calculate
  a fee that is high enough to get reliably included in the next block.

  Example:
  > bitcoin-cli estimatefee 6
        `}</SyntaxHighlighter>
      </div>
    );
  }
}

export default EstimateFee;
