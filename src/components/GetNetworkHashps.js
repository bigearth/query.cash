import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import JSONPretty from 'react-json-pretty';

class GetNetworkHashps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nblocks: 'null',
      height: 'null',
      data: 'null'
    };
  }

  handleNBlocksChange(e) {
    let value = e.target.value;
    this.setState({
      nblocks: value
    });
  }

  handleHeightChange(e) {
    let value = e.target.value;
    this.setState({
      height: value
    });
  }

  handleSubmit(e) {
    this.props.bitbox.Mining.getNetworkHashps(this.state.nblocks, this.state.height).then((result) => {
      this.setState({
        data: result
      })
    }, (err) => { console.log(err); });
    e.preventDefault();
  }

  render() {
    return (
      <div className="GetNetworkHashps">
        <h1 className="GetNetworkHashps-title">GetNetworkHashps</h1>
        <form className="pure-form pure-form-aligned" onSubmit={this.handleSubmit.bind(this)}>
          <fieldset>
            <div>
              <div className='pure-control-group'>
                <label>NBlocks*</label>
                <input onChange={this.handleNBlocksChange.bind(this)} id="nblocks" type="text" placeholder="nblocks"/>
              </div>
              <div className='pure-control-group'>
                <label>Height</label>
                <input onChange={this.handleHeightChange.bind(this)} id="height" type="text" placeholder="height"/>
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
  Returns the estimated network hashes per second based on the last n blocks.

  Pass in [blocks] to override # of blocks, -1 specifies since last difficulty change.
  Pass in [height] to estimate the network speed at the time when a certain block was found.

  Arguments:
  1. nblocks     (numeric, optional, default=120) The number of blocks, or -1 for blocks since last difficulty change.
  2. height      (numeric, optional, default=-1) To estimate at the time of the given height.

  Result:
  x             (numeric) Hashes per second estimated

  Examples:
  > bitcoin-cli getnetworkhashps
  > curl --user myusername --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "getnetworkhashps", "params": [] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/
        `}</SyntaxHighlighter>
      </div>
    );
  }
}

export default GetNetworkHashps;
