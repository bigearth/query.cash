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

class GetRawTransaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txid: '',
      data: ''
    };
  }

  handleInputChange(e) {
    let value = e.target.value;
    this.setState({
      txid: value
    });
  }

  handleSubmit(e) {
    BITBOX.RawTransactions.getRawTransaction(this.state.txid).then((result) => {
      this.setState({
        data: result
      })
    }, (err) => { console.log(err); });
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
            </div>
            <div>
              <button type="submit" className="pure-button pure-button-primary">Submit</button>
            </div>
          </fieldset>

        </form>
        <SyntaxHighlighter language='javascript' style={ocean}>{this.state.data}</SyntaxHighlighter>
      </div>
    );
  }
}

export default GetRawTransaction;
