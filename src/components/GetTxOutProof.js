import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import JSONPretty from 'react-json-pretty';

class GetTxOutProof extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txid: 'null',
      blockhash: 'null',
      data: 'null',
      data: 'null'
    };
  }

  handleTransactionIdsChange(e) {
    let value = e.target.value;
    this.setState({
      txid: value
    });
  }

  handleBlockHashChange(e) {
    let value = e.target.value;
    this.setState({
      blockhash: value
    });
  }

  handleSubmit(e) {
    this.props.bitbox.Blockchain.getTxOutProof(this.state.txid, this.state.blockhash).then((result) => {
      this.setState({
        data: result
      })
    }, (err) => { console.log(err); });
    e.preventDefault();
  }

  render() {
    return (
      <div className="GetTxOutProof">
        <h1 className="GetTxOutProof-title">GetTxOutProof</h1>
        <form className="pure-form pure-form-aligned" onSubmit={this.handleSubmit.bind(this)}>
          <fieldset>
            <div>
              <div className="pure-control-group">
                <label>TXIDs*</label>
                <input onChange={this.handleTransactionIdsChange.bind(this)} id="txid" type="text" placeholder="TXID 1"/>
              </div>
              <div className="pure-control-group">
                <label>Block Hash</label>
                <input onChange={this.handleBlockHashChange.bind(this)} id="blockhash" type="number" placeholder="Block header hash"/>
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
  Returns a hex-encoded proof that "txid" was included in a block.

  NOTE: By default this function only works sometimes. This is when there is an
  unspent output in the utxo for this transaction. To make it always work,
  you need to maintain a transaction index, using the -txindex command line option or
  specify the block in which the transaction is included manually (by blockhash).

  Arguments:
  1. "txids"       (string) A json array of txids to filter
      [
        "txid"     (string) A transaction hash
        ,...
      ]
  2. "blockhash"   (string, optional) If specified, looks for txid in the block with this hash

  Result:
  "data"           (string) A string that is a serialized, hex-encoded data for the proof.
        `}</SyntaxHighlighter>
      </div>
    );
  }
}

export default GetTxOutProof;
