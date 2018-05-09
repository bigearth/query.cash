import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  NavLink
} from 'react-router-dom';
import logo from './logo.png';

import Homepage from './Homepage';
import AddNode from './components/AddNode';
import DecodeRawTransaction from './components/DecodeRawTransaction';
import DecodeScript from './components/DecodeScript';
import GetAddedNodeInfo from './components/GetAddedNodeInfo';
import GetBestBlockHash from './components/GetBestBlockHash';
import GetBlock from './components/GetBlock';
import GetBlockchainInfo from './components/GetBlockchainInfo';
import GetBlockCount from './components/GetBlockCount';
import GetBlockHash from './components/GetBlockHash';
import GetBlockTemplate from './components/GetBlockTemplate';
import GetChainTips from './components/GetChainTips';
import GetConnectionCount from './components/GetConnectionCount';
import GetDifficulty from './components/GetDifficulty';
import GetInfo from './components/GetInfo';
import GetMempoolInfo from './components/GetMempoolInfo';
import GetMiningInfo from './components/GetMiningInfo';
import GetNetTotals from './components/GetNetTotals';
import GetNetworkHashps from './components/GetNetworkHashps';
import GetNetworkInfo from './components/GetNetworkInfo';
import GetPeerInfo from './components/GetPeerInfo';
import GetRawMempool from './components/GetRawMempool';
import GetRawTransaction from './components/GetRawTransaction';
import GetTxOut from './components/GetTxOut';
import GetTxOutProof from './components/GetTxOutProof';
import SendRawTransaction from './components/SendRawTransaction';
import SubmitBlock from './components/SubmitBlock';
import ValidateAddress from './components/ValidateAddress';
import VerifyTxOutProof from './components/VerifyTxOutProof';

import './App.css';

class App extends Component {
  constructor(props) {

    let BITBOXCli = require('bitbox-cli/lib/bitboxcli').default;
    let BITBOX = new BITBOXCli({
      protocol: 'https',
      host: 'rest.bitbox.earth'
    });

    super(props);
    this.state = {
      activeMenu: '',
      BITBOX: BITBOX
    }
  }

  handleClick() {
    if(this.state.activeMenu === 'active') {
      this.setState({
        activeMenu: ''
      });
    } else {
      this.setState({
        activeMenu: 'active'
      });
    }
  }

  render() {
    const AddNodePage = (props) => {
      return (
        <AddNode
          bitbox={this.state.BITBOX}
        />
      );
    };

    const DecodeRawTransactionPage = (props) => {
      return (
        <DecodeRawTransaction
          bitbox={this.state.BITBOX}
        />
      );
    };

    const DecodeScriptPage = (props) => {
      return (
        <DecodeScript
          bitbox={this.state.BITBOX}
        />
      );
    };

    const GetAddedNodeInfoPage = (props) => {
      return (
        <GetAddedNodeInfo
          bitbox={this.state.BITBOX}
        />
      );
    };

    const GetBestBlockHashPage = (props) => {
      return (
        <GetBestBlockHash
          bitbox={this.state.BITBOX}
        />
      );
    };

    const GetBlockPage = (props) => {
      return (
        <GetBlock
          bitbox={this.state.BITBOX}
        />
      );
    };

    const GetBlockchainInfoPage = (props) => {
      return (
        <GetBlockchainInfo
          bitbox={this.state.BITBOX}
        />
      );
    };

    const GetBlockCountPage = (props) => {
      return (
        <GetBlockCount
          bitbox={this.state.BITBOX}
        />
      );
    };

    const GetBlockHashPage = (props) => {
      return (
        <GetBlockHash
          bitbox={this.state.BITBOX}
        />
      );
    };

    const GetBlockTemplatePage = (props) => {
      return (
        <GetBlockTemplate
          bitbox={this.state.BITBOX}
        />
      );
    };

    const GetChainTipsPage = (props) => {
      return (
        <GetChainTips
          bitbox={this.state.BITBOX}
        />
      );
    };

    const GetConnectionCountPage = (props) => {
      return (
        <GetConnectionCount
          bitbox={this.state.BITBOX}
        />
      );
    };

    const GetDifficultyPage = (props) => {
      return (
        <GetDifficulty
          bitbox={this.state.BITBOX}
        />
      );
    };

    const GetInfoPage = (props) => {
      return (
        <GetInfo
          bitbox={this.state.BITBOX}
        />
      );
    };

    const GetMempoolInfoPage = (props) => {
      return (
        <GetMempoolInfo
          bitbox={this.state.BITBOX}
        />
      );
    };

    const GetMiningInfoPage = (props) => {
      return (
        <GetMiningInfo
          bitbox={this.state.BITBOX}
        />
      );
    };

    const GetNetTotalsPage = (props) => {
      return (
        <GetNetTotals
          bitbox={this.state.BITBOX}
        />
      );
    };

    const GetNetworkHashpsPage = (props) => {
      return (
        <GetNetworkHashps
          bitbox={this.state.BITBOX}
        />
      );
    };

    const GetNetworkInfoPage = (props) => {
      return (
        <GetNetworkInfo
          bitbox={this.state.BITBOX}
        />
      );
    };

    const GetPeerInfoPage = (props) => {
      return (
        <GetPeerInfo
          bitbox={this.state.BITBOX}
        />
      );
    };

    const GetRawMempoolPage = (props) => {
      return (
        <GetRawMempool
          bitbox={this.state.BITBOX}
        />
      );
    };

    const GetRawTransactionPage = (props) => {
      return (
        <GetRawTransaction
          bitbox={this.state.BITBOX}
        />
      );
    };

    const GetTxOutPage = (props) => {
      return (
        <GetTxOut
          bitbox={this.state.BITBOX}
        />
      );
    };

    const GetTxOutProofPage = (props) => {
      return (
        <GetTxOutProof
          bitbox={this.state.BITBOX}
        />
      );
    };

    const SendRawTransactionPage = (props) => {
      return (
        <SendRawTransaction
          bitbox={this.state.BITBOX}
        />
      );
    };

    const SubmitBlockPage = (props) => {
      return (
        <SubmitBlock
          bitbox={this.state.BITBOX}
        />
      );
    };

    const ValidateAddressPage = (props) => {
      return (
        <ValidateAddress
          bitbox={this.state.BITBOX}
        />
      );
    };

    const VerifyTxOutProofPage = (props) => {
      return (
        <VerifyTxOutProof
          bitbox={this.state.BITBOX}
        />
      );
    };

    return (
      <div id="layout" className={`${this.state.activeMenu}`}>
        <div id="main">
          <div className="header">
            <h1>query.cash</h1>
            <h2>A web based interface to the Bitcoin Cash JSON-RPC</h2>
            <p>Welcome to query.cash! Explore the Bitcoin Cash API by selecting a command from the list on the left.</p>
          </div>
          <div className="content">
            <Router>
              <div>
                <a href="#menu" id="menuLink" onClick={this.handleClick.bind(this)} className={`menu-link`}>
                  <span></span>
                </a>
                <div id="menu">
                  <div className="pure-menu">
                    <a
                      className="pure-menu-heading"
                      href="https://www.bitbox.earth">

                      <img src='./logo.png' /> <br />BITBOX
                    </a>
                    <ul className="pure-menu-list">
                      <li className="pure-menu-item">
                        <NavLink
                          activeClassName="pure-menu-selected"
                          className="pure-menu-link"
                          to="/addnode">
                          AddNode
                        </NavLink>
                      </li>
                      <li className="pure-menu-item">
                        <NavLink
                          activeClassName="pure-menu-selected"
                          className="pure-menu-link"
                          to="/decoderawtransaction">
                          DecodeRawTransaction
                        </NavLink>
                      </li>
                      <li className="pure-menu-item">
                        <NavLink
                          activeClassName="pure-menu-selected"
                          className="pure-menu-link"
                          to="/decodescript">
                          DecodeScript
                        </NavLink>
                      </li>
                      <li className="pure-menu-item">
                        <NavLink
                          activeClassName="pure-menu-selected"
                          className="pure-menu-link"
                          to="/getaddednodeinfo">
                          GetAddedNodeInfo
                        </NavLink>
                      </li>
                      <li className="pure-menu-item">
                        <NavLink
                          activeClassName="pure-menu-selected"
                          className="pure-menu-link"
                          to="/getbestblockhash">
                          GetBestBlockHash
                        </NavLink>
                      </li>
                      <li className="pure-menu-item">
                        <NavLink
                          activeClassName="pure-menu-selected"
                          className="pure-menu-link"
                          to="/getblock">
                          GetBlock
                        </NavLink>
                      </li>
                      <li className="pure-menu-item">
                        <NavLink
                          activeClassName="pure-menu-selected"
                          className="pure-menu-link"
                          to="/getblockchaininfo">
                          GetBlockchainInfo
                        </NavLink>
                      </li>
                      <li className="pure-menu-item">
                        <NavLink
                          activeClassName="pure-menu-selected"
                          className="pure-menu-link"
                          to="/getblockcount">
                          GetBlockCount
                        </NavLink>
                      </li>
                      <li className="pure-menu-item">
                        <NavLink
                          activeClassName="pure-menu-selected"
                          className="pure-menu-link"
                          to="/getblockhash">
                          GetBlockHash
                        </NavLink>
                      </li>
                      <li className="pure-menu-item">
                        <NavLink
                          activeClassName="pure-menu-selected"
                          className="pure-menu-link"
                          to="/getblocktemplate">
                          GetBlockTemplate
                        </NavLink>
                      </li>
                      <li className="pure-menu-item">
                        <NavLink
                          activeClassName="pure-menu-selected"
                          className="pure-menu-link"
                          to="/getchaintips">
                          GetChainTips
                        </NavLink>
                      </li>
                      <li className="pure-menu-item">
                        <NavLink
                          activeClassName="pure-menu-selected"
                          className="pure-menu-link"
                          to="/getconnectioncount">
                          GetConnectionCount
                        </NavLink>
                      </li>
                      <li className="pure-menu-item">
                        <NavLink
                          activeClassName="pure-menu-selected"
                          className="pure-menu-link"
                          to="/getdifficulty">
                          GetDifficulty
                        </NavLink>
                      </li>
                      <li className="pure-menu-item">
                        <NavLink
                          activeClassName="pure-menu-selected"
                          className="pure-menu-link"
                          to="/getinfo">
                          GetInfo
                        </NavLink>
                      </li>
                      <li className="pure-menu-item">
                        <NavLink
                          activeClassName="pure-menu-selected"
                          className="pure-menu-link"
                          to="/getmempoolinfo">
                          GetMempoolInfo
                        </NavLink>
                      </li>
                      <li className="pure-menu-item">
                        <NavLink
                          activeClassName="pure-menu-selected"
                          className="pure-menu-link"
                          to="/getmininginfo">
                          GetMiningInfo
                        </NavLink>
                      </li>
                      <li className="pure-menu-item">
                        <NavLink
                          activeClassName="pure-menu-selected"
                          className="pure-menu-link"
                          to="/getnettotals">
                          GetNetTotals
                        </NavLink>
                      </li>
                      <li className="pure-menu-item">
                        <NavLink
                          activeClassName="pure-menu-selected"
                          className="pure-menu-link"
                          to="/getnetworkhashps">
                          GetNetworkHashps
                        </NavLink>
                      </li>
                      <li className="pure-menu-item">
                        <NavLink
                          activeClassName="pure-menu-selected"
                          className="pure-menu-link"
                          to="/getnetworkinfo">
                          GetNetworkInfo
                        </NavLink>
                      </li>
                      <li className="pure-menu-item">
                        <NavLink
                          activeClassName="pure-menu-selected"
                          className="pure-menu-link"
                          to="/getpeerinfo">
                          GetPeerInfo
                        </NavLink>
                      </li>
                      <li className="pure-menu-item">
                        <NavLink
                          activeClassName="pure-menu-selected"
                          className="pure-menu-link"
                          to="/getrawmempool">
                          GetRawMempool
                        </NavLink>
                      </li>
                      <li className="pure-menu-item">
                        <NavLink
                          activeClassName="pure-menu-selected"
                          className="pure-menu-link"
                          to="/getrawtransaction">
                          GetRawTransaction
                        </NavLink>
                      </li>
                      <li className="pure-menu-item">
                        <NavLink
                          activeClassName="pure-menu-selected"
                          className="pure-menu-link"
                          to="/gettxout">
                          GetTxOut
                        </NavLink>
                      </li>
                      <li className="pure-menu-item">
                        <NavLink
                          activeClassName="pure-menu-selected"
                          className="pure-menu-link"
                          to="/gettxoutproof">
                          GetTxOutProof
                        </NavLink>
                      </li>
                      <li className="pure-menu-item">
                        <NavLink
                          activeClassName="pure-menu-selected"
                          className="pure-menu-link"
                          to="/sendrawtransaction">
                          SendRawTransaction
                        </NavLink>
                      </li>
                      <li className="pure-menu-item">
                        <NavLink
                          activeClassName="pure-menu-selected"
                          className="pure-menu-link"
                          to="/submitblock">
                          SubmitBlock
                        </NavLink>
                      </li>
                      <li className="pure-menu-item">
                        <NavLink
                          activeClassName="pure-menu-selected"
                          className="pure-menu-link"
                          to="/validateaddress">
                          ValidateAddress
                        </NavLink>
                      </li>
                      <li className="pure-menu-item">
                        <NavLink
                          activeClassName="pure-menu-selected"
                          className="pure-menu-link"
                          to="/verifytxoutproof">
                          VerifyTxOutProof
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>

                <Switch>
                  <Route path="/addnode" component={AddNodePage}/>
                  <Route path="/decoderawtransaction" component={DecodeRawTransactionPage}/>
                  <Route path="/decodescript" component={DecodeScriptPage}/>
                  <Route path="/getaddednodeinfo" component={GetAddedNodeInfoPage}/>
                  <Route path="/getbestblockhash" component={GetBestBlockHashPage}/>
                  <Route path="/getblock" component={GetBlockPage}/>
                  <Route path="/getblockchaininfo" component={GetBlockchainInfoPage}/>
                  <Route path="/getblockcount" component={GetBlockCountPage}/>
                  <Route path="/getblockhash" component={GetBlockHashPage}/>
                  <Route path="/getblocktemplate" component={GetBlockTemplatePage}/>
                  <Route path="/getchaintips" component={GetChainTipsPage}/>
                  <Route path="/getconnectioncount" component={GetConnectionCountPage}/>
                  <Route path="/getdifficulty" component={GetDifficultyPage}/>
                  <Route path="/getinfo" component={GetInfoPage}/>
                  <Route path="/getmempoolinfo" component={GetMempoolInfoPage}/>
                  <Route path="/getmininginfo" component={GetMiningInfoPage}/>
                  <Route path="/getnettotals" component={GetNetTotalsPage}/>
                  <Route path="/getnetworkhashps" component={GetNetworkHashpsPage}/>
                  <Route path="/getnetworkinfo" component={GetNetworkInfoPage}/>
                  <Route path="/getpeerinfo" component={GetPeerInfoPage}/>
                  <Route path="/getrawmempool" component={GetRawMempoolPage}/>
                  <Route path="/getrawtransaction" component={GetRawTransactionPage}/>
                  <Route path="/gettxout" component={GetTxOutPage}/>
                  <Route path="/gettxoutproof" component={GetTxOutProofPage}/>
                  <Route path="/sendrawtransaction" component={SendRawTransactionPage}/>
                  <Route path="/submitblock" component={SubmitBlockPage}/>
                  <Route path="/validateaddress" component={ValidateAddressPage}/>
                  <Route path="/verifytxoutproof" component={VerifyTxOutProofPage}/>
                  <Route exact path="/" component={Homepage}/>
                  <Redirect from='*' to='/' />
                </Switch>
              </div>
            </Router>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
