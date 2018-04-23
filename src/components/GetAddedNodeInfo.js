import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import JSONPretty from 'react-json-pretty';

class GetAddedNodeInfo extends Component {
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
    // BITBOX.RawTransactions.GetAddedNodeInfo(this.state.txid).then((result) => {
    //   this.setState({
    //     data: result
    //   })
    // }, (err) => { console.log(err); });
    e.preventDefault();
  }

  render() {
    return (
      <div className="GetAddedNodeInfo">
        <h1 className="GetAddedNodeInfo-title">GetAddedNodeInfo</h1>
        <p>Coming Soon</p>
        <h2>Command Result</h2>
        <JSONPretty id="json-pretty" json={this.state.data}></JSONPretty>
        <h2>RPC Help</h2>
        <SyntaxHighlighter language='bash' style={ocean}>{`
  getaddednodeinfo ( "node" )

  Returns information about the given added node, or all added nodes
  (note that onetry addnodes are not listed here)

  Arguments:
  1. "node"   (string, optional) If provided, return information about this specific node, otherwise all nodes are returned.

  Result:
  [
    {
      "addednode" : "192.168.0.201",   (string) The node ip address or name (as provided to addnode)
      "connected" : true|false,          (boolean) If connected
      "addresses" : [                    (list of objects) Only when connected = true
         {
           "address" : "192.168.0.201:8333",  (string) The bitcoin server IP and port we're connected to
           "connected" : "outbound"           (string) connection, inbound or outbound
         }
       ]
    }
    ,...
  ]

  Examples:
  > bitcoin-cli getaddednodeinfo true
  > bitcoin-cli getaddednodeinfo true "192.168.0.201"
  > curl --user myusername --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "getaddednodeinfo", "params": [true, "192.168.0.201"] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/
        `}</SyntaxHighlighter>
      </div>
    );
  }
}

export default GetAddedNodeInfo;
