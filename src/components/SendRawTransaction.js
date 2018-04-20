import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';

let BITBOXCli = require('bitbox-cli/lib/bitboxcli').default;
let BITBOX = new BITBOXCli({
  protocol: 'http',
  host: '138.68.54.100',
  port: 8332,
  username: 'bitcoin',
  password: 'xhFjluMJMyOXcYvF',
  corsproxy: true
});

class SendRawTransaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hex: '',
      data: 'null'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    let value = e.target.value;
    this.setState({
      hex: value
    });
  }

  handleSubmit(e) {
    BITBOX.RawTransactions.sendRawTransaction(this.state.hex).then((result) => {
      this.setState({
        data: result
      })
    }, (err) => { console.log(err); });
    e.preventDefault();
  }

  render() {
    return (
      <div className="SendRawTransaction">
        <h1 className="SendRawTransaction-title">SendRawTransaction</h1>
        <form className="pure-form pure-form-aligned" onSubmit={this.handleSubmit.bind(this)}>
            <fieldset>
                <div className="pure-control-group">
                    <label>Raw Hex</label>
                    <input onChange={this.handleInputChange.bind(this)} id="name" type="text" placeholder="Raw Hex"/>
                </div>
                <div>
                    <button type="submit" className="pure-button pure-button-primary">Submit</button>
                </div>
            </fieldset>
            <SyntaxHighlighter language='javascript' style={ocean}>{this.state.data}</SyntaxHighlighter>
        </form>
      </div>
    );
  }
}

export default SendRawTransaction;