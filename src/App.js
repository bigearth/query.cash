import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  NavLink
} from 'react-router-dom';

import Homepage from './Homepage';
import AddNode from './components/AddNode';
import CreateRawTransaction from './components/CreateRawTransaction';
import DecodeRawTransaction from './components/DecodeRawTransaction';
import DecodeScript from './components/DecodeScript';
import EstimateFee from './components/EstimateFee';
import EstimatePriority from './components/EstimatePriority';
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
import PrioritiseTransaction from './components/PrioritiseTransaction';
import SendRawTransaction from './components/SendRawTransaction';
import SignRawTransaction from './components/SignRawTransaction';
import SubmitBlock from './components/SubmitBlock';
import ValidateAddress from './components/ValidateAddress';
import VerifyTxOutProof from './components/VerifyTxOutProof';

import './App.css';
let BITBOXCli = require('bitbox-cli/lib/bitboxcli').default;
let BITBOX = new BITBOXCli({
});


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <Router>
        <div>
          <a href="#menu" id="menuLink" className="menu-link">
            <span></span>
          </a>

          <div id="menu">
            <div className="pure-menu">
              <NavLink
                activeClassName="pure-menu-selected"
                className="pure-menu-heading"
                to="/">
                BITBOX
              </NavLink>
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
                    to="/createrawtransaction">
                    CreateRawTransaction
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
                    to="/estimatefee">
                    EstimateFee
                  </NavLink>
                </li>
                <li className="pure-menu-item">
                  <NavLink
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/estimatepriority">
                    EstimatePriority
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
                    to="/PrioritiseTransaction">
                    PrioritiseTransaction
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
                    to="/signrawtransaction">
                    SignRawTransaction
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
            <Route path="/addnode" component={AddNode}/>
            <Route path="/createrawtransaction" component={CreateRawTransaction}/>
            <Route path="/decoderawtransaction" component={DecodeRawTransaction}/>
            <Route path="/decodescript" component={DecodeScript}/>
            <Route path="/estimatefee" component={EstimateFee}/>
            <Route path="/estimatepriority" component={EstimatePriority}/>
            <Route path="/getaddednodeinfo" component={GetAddedNodeInfo}/>
            <Route path="/getbestblockhash" component={GetBestBlockHash}/>
            <Route path="/getblock" component={GetBlock}/>
            <Route path="/getblockchaininfo" component={GetBlockchainInfo}/>
            <Route path="/getblockcount" component={GetBlockCount}/>
            <Route path="/getblockhash" component={GetBlockHash}/>
            <Route path="/getblocktemplate" component={GetBlockTemplate}/>
            <Route path="/getchaintips" component={GetChainTips}/>
            <Route path="/getconnectioncount" component={GetConnectionCount}/>
            <Route path="/getdifficulty" component={GetDifficulty}/>
            <Route path="/getinfo" component={GetInfo}/>
            <Route path="/getmempoolinfo" component={GetMempoolInfo}/>
            <Route path="/getmininginfo" component={GetMiningInfo}/>
            <Route path="/getnettotals" component={GetNetTotals}/>
            <Route path="/getnetworkhashps" component={GetNetworkHashps}/>
            <Route path="/getnetworkinfo" component={GetNetworkInfo}/>
            <Route path="/getpeerinfo" component={GetPeerInfo}/>
            <Route path="/getrawmempool" component={GetRawMempool}/>
            <Route path="/getrawtransaction" component={GetRawTransaction}/>
            <Route path="/gettxout" component={GetTxOut}/>
            <Route path="/gettxoutproof" component={GetTxOutProof}/>
            <Route path="/prioritisetransaction" component={PrioritiseTransaction}/>
            <Route path="/sendrawtransaction" component={SendRawTransaction}/>
            <Route path="/signrawtransaction" component={SignRawTransaction}/>
            <Route path="/submitblock" component={SubmitBlock}/>
            <Route path="/validateaddress" component={ValidateAddress}/>
            <Route path="/verifytxoutproof" component={VerifyTxOutProof}/>
            <Route exact path="/" component={Homepage}/>
            <Redirect from='*' to='/' />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;