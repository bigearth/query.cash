import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import JSONPretty from 'react-json-pretty';

class GetNetworkInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'null'
    };
  }

  handleSubmit(e) {
    this.props.bitbox.Network.getNetworkInfo(this.state.txid).then((result) => {
      this.setState({
        data: result
      })
    }, (err) => { console.log(err); });
    e.preventDefault();
  }

  render() {
    return (
      <div className="GetNetworkInfo">
        <h1 className="GetNetworkInfo-title">GetNetworkInfo</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <button type="submit" className="pure-button pure-button-primary">Submit</button>
        </form>
        <h2>Command Result</h2>
        <JSONPretty id="json-pretty" json={this.state.data}></JSONPretty>
        <h2>RPC Help</h2>
        <SyntaxHighlighter language='bash' style={ocean}>{`
  Returns an object containing various state info regarding P2P networking.

  Result:
  {
    "version": xxxxx,                      (numeric) the server version
    "subversion": "/Satoshi:x.x.x/",     (string) the server subversion string
    "protocolversion": xxxxx,              (numeric) the protocol version
    "localservices": "xxxxxxxxxxxxxxxx", (string) the services we offer to the network
    "localrelay": true|false,              (bool) true if transaction relay is requested from peers
    "timeoffset": xxxxx,                   (numeric) the time offset
    "connections": xxxxx,                  (numeric) the number of connections
    "networkactive": true|false,           (bool) whether p2p networking is enabled
    "networks": [                          (array) information per network
    {
      "name": "xxx",                     (string) network (ipv4, ipv6 or onion)
      "limited": true|false,               (boolean) is the network limited using -onlynet?
      "reachable": true|false,             (boolean) is the network reachable?
      "proxy": "host:port"               (string) the proxy that is used for this network, or empty if none
      "proxy_randomize_credentials": true|false,  (string) Whether randomized credentials are used
    }
    ,...
    ],
    "relayfee": x.xxxxxxxx,                (numeric) minimum relay fee for non-free transactions in BCH/kB
    "incrementalfee": x.xxxxxxxx,          (numeric) minimum fee increment for mempool limiting or BIP 125 replacement in BCH/kB
    "localaddresses": [                    (array) list of local addresses
    {
      "address": "xxxx",                 (string) network address
      "port": xxx,                         (numeric) network port
      "score": xxx                         (numeric) relative score
    }
    ,...
    ]
    "warnings": "..."                    (string) any network warnings
  }

  Examples:
  > bitcoin-cli getnetworkinfo
  > curl --user myusername --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "getnetworkinfo", "params": [] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/
        `}</SyntaxHighlighter>
      </div>
    );
  }
}

export default GetNetworkInfo;
