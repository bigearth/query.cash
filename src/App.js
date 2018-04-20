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
import AbandonTransaction from './components/AbandonTransaction';
import AddMultisigAddress from './components/AddMultisigAddress';
import AddNode from './components/AddNode';
import CreateMultisig from './components/CreateMultisig';
import CreateRawTransaction from './components/CreateRawTransaction';
import DecodeRawTransaction from './components/DecodeRawTransaction';
import DecodeScript from './components/DecodeScript';
import DumpPrivkey from './components/DumpPrivkey';
import EncryptWallet from './components/EncryptWallet';
import EstimateFee from './components/EstimateFee';
import EstimatePriority from './components/EstimatePriority';
import GetAccountAddress from './components/GetAccountAddress';
import GetAccount from './components/GetAccount';
import GetAddedNodeInfo from './components/GetAddedNodeInfo';
import GetAddressesByAccount from './components/GetAddressesByAccount';
import GetBalance from './components/GetBalance';
import GetBestBlockHash from './components/GetBestBlockHash';
import GetBlock from './components/GetBlock';
import GetBlockchainInfo from './components/GetBlockchainInfo';
import GetBlockCount from './components/GetBlockCount';
import GetBlockHash from './components/GetBlockHash';
import GetBlockTemplate from './components/GetBlockTemplate';
import GetChainTips from './components/GetChainTips';
import GetConnectionCount from './components/GetConnectionCount';
import GetDifficulty from './components/GetDifficulty';
import GetGenerate from './components/GetGenerate';
import GetInfo from './components/GetInfo';
import GetMempoolInfo from './components/GetMempoolInfo';
import GetMiningInfo from './components/GetMiningInfo';
import GetNetTotals from './components/GetNetTotals';
import GetNetworkHashps from './components/GetNetworkHashps';
import GetNetworkInfo from './components/GetNetworkInfo';
import GetPeerInfo from './components/GetPeerInfo';
import GetRawMempool from './components/GetRawMempool';
import GetRawTransaction from './components/GetRawTransaction';
import GetReceivedByAccount from './components/GetReceivedByAccount';
import GetReceivedByAddress from './components/GetReceivedByAddress';
import GetTransaction from './components/GetTransaction';
import GetTxOut from './components/GetTxOut';
import GetTxOutProof from './components/GetTxOutProof';
import GetUnconfirmedBalance from './components/GetUnconfirmedBalance';
import GetWalletInfo from './components/GetWalletInfo';
import Help from './components/Help';
import KeypoolRefill from './components/KeypoolRefill';
import ListAccounts from './components/ListAccounts';
import ListAddressGroupings from './components/ListAddressGroupings';
import ListLockUnspent from './components/ListLockUnspent';
import ListReceivedByAccount from './components/ListReceivedByAccount';
import ListReceivedByAddress from './components/ListReceivedByAddress';
import ListTransactions from './components/ListTransactions';
import SetTxFee from './components/SetTxFee';
import SignMessage from './components/SignMessage';
import SignRawTransaction from './components/SignRawTransaction';
import SubmitBlock from './components/SubmitBlock';
import ValidateAddress from './components/ValidateAddress';
import VerifyMessage from './components/VerifyMessage';
import VerifyTxOutProof from './components/VerifyTxOutProof';
import WalletLock from './components/WalletLock';
import WalletPassPhrase from './components/WalletPassPhrase';
import WalletPassPhraseChange from './components/WalletPassPhraseChange';

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
                    to="/abandontransaction">
                    AbandonTransaction
                  </NavLink>
                </li>
                <li className="pure-menu-item">
                  <NavLink
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/addmultisigaddress">
                    AddMultisigAddress
                  </NavLink>
                </li>
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
                    to="/createmultisig">
                    CreateMultisig
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
                    to="/dumpprivkey">
                    DumpPrivkey
                  </NavLink>
                </li>
                <li className="pure-menu-item">
                  <NavLink
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/encryptwallet">
                    EncryptWallet
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
                    to="/getaccountaddress">
                    GetAccountAddress
                  </NavLink>
                </li>
                <li className="pure-menu-item">
                  <NavLink
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/getaccount">
                    GetAccount
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
                    to="/getaddressesbyaccount">
                    GetAddressesByAccount
                  </NavLink>
                </li>
                <li className="pure-menu-item">
                  <NavLink
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/getbalance">
                    GetBalance
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
                    to="/getgenerate">
                    GetGenerate
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
                    to="/getreceivedbyaccount">
                    GetReceivedByAccount
                  </NavLink>
                </li>
                <li className="pure-menu-item">
                  <NavLink
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/getreceivedbyaddress">
                    GetReceivedByAddress
                  </NavLink>
                </li>
                <li className="pure-menu-item">
                  <NavLink
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/gettransaction">
                    GetTransaction
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
                    to="/getunconfirmedbalance">
                    GetUnconfirmedBalance
                  </NavLink>
                </li>
                <li className="pure-menu-item">
                  <NavLink
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/getwalletinfo">
                    GetWalletInfo
                  </NavLink>
                </li>
                <li className="pure-menu-item">
                  <NavLink
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/help">
                    Help
                  </NavLink>
                </li>
                <li className="pure-menu-item">
                  <NavLink
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/keypoolrefill">
                    KeypoolRefill
                  </NavLink>
                </li>
                <li className="pure-menu-item">
                  <NavLink
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/listaccounts">
                    ListAccounts
                  </NavLink>
                </li>
                <li className="pure-menu-item">
                  <NavLink
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/listaddressgroupings">
                    ListAddressGroupings
                  </NavLink>
                </li>
                <li className="pure-menu-item">
                  <NavLink
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/listlockunspent">
                    ListLockUnspent
                  </NavLink>
                </li>
                <li className="pure-menu-item">
                  <NavLink
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/listreceivedbyaccount">
                    ListReceivedByAccount
                  </NavLink>
                </li>
                <li className="pure-menu-item">
                  <NavLink
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/listreceivedbyaddress">
                    ListReceivedByAddress
                  </NavLink>
                </li>
                <li className="pure-menu-item">
                  <NavLink
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/listtransactions">
                    ListTransactions
                  </NavLink>
                </li>
                <li className="pure-menu-item">
                  <NavLink
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/settxfee">
                    SetTxFee
                  </NavLink>
                </li>
                <li className="pure-menu-item">
                  <NavLink
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/signmessage">
                    SignMessage
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
                    to="/verifymessage">
                    VerifyMessage
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
                <li className="pure-menu-item">
                  <NavLink
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/walletlock">
                    WalletLock
                  </NavLink>
                </li>
                <li className="pure-menu-item">
                  <NavLink
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/walletpassphrase">
                    WalletPassPhrase
                  </NavLink>
                </li>
                <li className="pure-menu-item">
                  <NavLink
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/walletpassphrasechange">
                    WalletPassPhraseChange
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <Switch>
            <Route path="/abandontransaction" component={AbandonTransaction}/>
            <Route path="/addmultisigaddress" component={AddMultisigAddress}/>
            <Route path="/addnode" component={AddNode}/>
            <Route path="/createmultisig" component={CreateMultisig}/>
            <Route path="/createrawtransaction" component={CreateRawTransaction}/>
            <Route path="/decoderawtransaction" component={DecodeRawTransaction}/>
            <Route path="/decodescript" component={DecodeScript}/>
            <Route path="/dumpprivkey" component={DumpPrivkey}/>
            <Route path="/encryptwallet" component={EncryptWallet}/>
            <Route path="/estimatefee" component={EstimateFee}/>
            <Route path="/estimatepriority" component={EstimatePriority}/>
            <Route path="/getaccountaddress" component={GetAccountAddress}/>
            <Route path="/getaccount" component={GetAccount}/>
            <Route path="/getaddednodeinfo" component={GetAddedNodeInfo}/>
            <Route path="/getaddressesbyaccount" component={GetAddressesByAccount}/>
            <Route path="/getbalance" component={GetBalance}/>
            <Route path="/getbestblockhash" component={GetBestBlockHash}/>
            <Route path="/getblock" component={GetBlock}/>
            <Route path="/getblockchaininfo" component={GetBlockchainInfo}/>
            <Route path="/getblockcount" component={GetBlockCount}/>
            <Route path="/getblockhash" component={GetBlockHash}/>
            <Route path="/getblocktemplate" component={GetBlockTemplate}/>
            <Route path="/getchaintips" component={GetChainTips}/>
            <Route path="/getconnectioncount" component={GetConnectionCount}/>
            <Route path="/getdifficulty" component={GetDifficulty}/>
            <Route path="/getgenerate" component={GetGenerate}/>
            <Route path="/getinfo" component={GetInfo}/>
            <Route path="/getmempoolinfo" component={GetMempoolInfo}/>
            <Route path="/getmininginfo" component={GetMiningInfo}/>
            <Route path="/getnettotals" component={GetNetTotals}/>
            <Route path="/getnetworkhashps" component={GetNetworkHashps}/>
            <Route path="/getnetworkinfo" component={GetNetworkInfo}/>
            <Route path="/getpeerinfo" component={GetPeerInfo}/>
            <Route path="/getrawmempool" component={GetRawMempool}/>
            <Route path="/getrawtransaction" component={GetRawTransaction}/>
            <Route path="/getreceivedbyaccount" component={GetReceivedByAccount}/>
            <Route path="/getreceivedbyaddress" component={GetReceivedByAddress}/>
            <Route path="/gettransaction" component={GetTransaction}/>
            <Route path="/gettxout" component={GetTxOut}/>
            <Route path="/gettxoutproof" component={GetTxOutProof}/>
            <Route path="/getunconfirmedbalance" component={GetUnconfirmedBalance}/>
            <Route path="/getwalletinfo" component={GetWalletInfo}/>
            <Route path="/help" component={Help}/>
            <Route path="/keypoolrefill" component={KeypoolRefill}/>
            <Route path="/listaccounts" component={ListAccounts}/>
            <Route path="/listaddressgroupings" component={ListAddressGroupings}/>
            <Route path="/listlockunspent" component={ListLockUnspent}/>
            <Route path="/listreceivedbyaccount" component={ListReceivedByAccount}/>
            <Route path="/listreceivedbyaddress" component={ListReceivedByAddress}/>
            <Route path="/listtransactions" component={ListTransactions}/>
            <Route path="/settxfee" component={SetTxFee}/>
            <Route path="/signmessage" component={SignMessage}/>
            <Route path="/signrawtransaction" component={SignRawTransaction}/>
            <Route path="/submitblock" component={SubmitBlock}/>
            <Route path="/validateaddress" component={ValidateAddress}/>
            <Route path="/verifymessage" component={VerifyMessage}/>
            <Route path="/verifytxoutproof" component={VerifyTxOutProof}/>
            <Route path="/walletlock" component={WalletLock}/>
            <Route path="/walletpassphrase" component={WalletPassPhrase}/>
            <Route path="/walletpassphrasechange" component={WalletPassPhraseChange}/>
            <Route exact path="/" component={Homepage}/>
            <Redirect from='*' to='/' />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
