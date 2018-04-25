import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import JSONPretty from 'react-json-pretty';

class AddNode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'null'
    };
  }

  handleNodeChange(e) {
    let value = e.target.value;
    this.setState({
      node: value
    });
  }

  handleCommandChange(e) {
    let value = e.target.value;
    this.setState({
      command: value
    });
  }

  handleSubmit(e) {
    this.props.bitbox.Network.addNode(this.state.node, this.state.command).then((result) => {
      this.setState({
        data: result
      })
    }, (err) => { console.log(err); });
    e.preventDefault();
  }

  render() {
    return (
      <div className="AddNode">
        <h1 className="AddNode-title">AddNode</h1>
        <form className="pure-form pure-form-aligned" onSubmit={this.handleSubmit.bind(this)}>
          <fieldset>
            <div className="pure-control-group">
              <div className='pure-control-group'>
                <label>Node</label>
                <input onChange={this.handleNodeChange.bind(this)} id="node" type="text" placeholder="node"/>
              </div>
              <div className='pure-control-group'>
                <label>Command</label>
                <input onChange={this.handleCommandChange.bind(this)} id="command" type="text" placeholder="command"/>
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
  addnode "node" "add|remove|onetry"

  Attempts add or remove a node from the addnode list.
  Or try a connection to a node once.

  Arguments:
  1. "node"     (string, required) The node (see getpeerinfo for nodes)
  2. "command"  (string, required) 'add' to add a node to the list, 'remove' to remove a node from the list, 'onetry' to try a connection to the node once

  Examples:
  > bitcoin-cli addnode "192.168.0.6:8333" "onetry"
  > curl --user myusername --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "addnode", "params": ["192.168.0.6:8333", "onetry"] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/
        `}</SyntaxHighlighter>
      </div>
    );
  }
}

export default AddNode;
