import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import JSONPretty from 'react-json-pretty';

class EstimatePriority extends Component {
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
    this.props.bitbox.Util.estimatePriority(this.state.nblocks).then((result) => {
      this.setState({
        data: result
      })
    }, (err) => { console.log(err); });
    e.preventDefault();
  }

  render() {
    return (
      <div className="EstimatePriority">
        <h1 className="EstimatePriority-title">EstimatePriority</h1>
        <form className="pure-form pure-form-aligned" onSubmit={this.handleSubmit.bind(this)}>
          <fieldset>
            <div className="pure-control-group">
              <label>nblocks</label>
              <input onChange={this.handleInputChange.bind(this)} id="nblocks" type="text" placeholder="nblocks "/>
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
  estimatepriority nblocks

  DEPRECATED. Estimates the approximate priority a zero-fee transaction needs to begin
  confirmation within nblocks blocks.

  Arguments:
  1. nblocks     (numeric, required)

  Result:
  n              (numeric) estimated priority

  A negative value is returned if not enough transactions and blocks
  have been observed to make an estimate.

  Example:
  > bitcoin-cli estimatepriority 6
        `}</SyntaxHighlighter>
      </div>
    );
  }
}

export default EstimatePriority;
