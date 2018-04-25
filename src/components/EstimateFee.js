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
      nblocks: value
    });
  }

  handleSubmit(e) {
    this.props.bitbox.Util.estimateFee(this.state.nblocks).then((result) => {
      this.setState({
        data: result
      })
    }, (err) => { console.log(err); });
    e.preventDefault();
  }

  render() {
    return (
      <div className="EstimateFee">
        <h1 className="EstimateFee-title">EstimateFee</h1>
        <form className="pure-form pure-form-aligned" onSubmit={this.handleSubmit.bind(this)}>
          <fieldset>
            <div className="pure-control-group">
              <label>nblocks</label>
              <input onChange={this.handleInputChange.bind(this)} id="nblocks" type="text" placeholder="nblocks" />
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
