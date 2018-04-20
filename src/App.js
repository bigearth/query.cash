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
import AbandonTransaction from './components/AbandonTransaction';
import AddMultisigAddress from './components/AddMultisigAddress';
import AddNode from './components/AddNode';
import DecodeRawTransaction from './components/DecodeRawTransaction';
import GetRawTransaction from './components/GetRawTransaction';
import Homepage from './Homepage';

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
                    to="/decoderawtransaction">
                    DecodeRawTransaction
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
              </ul>
            </div>
          </div>

          <Switch>
            <Route path="/abandontransaction" component={AbandonTransaction}/>
            <Route path="/addmultisigaddress" component={AddMultisigAddress}/>
            <Route path="/addnode" component={AddNode}/>
            <Route path="/decoderawtransaction" component={DecodeRawTransaction}/>
            <Route path="/getrawtransaction" component={GetRawTransaction}/>
            <Route exact path="/" component={Homepage}/>
            <Redirect from='*' to='/' />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
