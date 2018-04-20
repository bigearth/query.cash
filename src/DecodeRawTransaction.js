import React, { Component } from 'react';

class DecodeRawTransaction extends Component {
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
      <div className="DecodeRawTransaction">
        <h1 className="DecodeRawTransaction-title">DecodeRawTransaction</h1>
        <form className="pure-form pure-form-aligned">
            <fieldset>
                <div className="pure-control-group">
                    <label>Username</label>
                    <input id="name" type="text" placeholder="Username"/>
                    <span className="pure-form-message-inline">This is a required field.</span>
                </div>
                <div>
                    <button type="submit" className="pure-button pure-button-primary">Submit</button>
                </div>
            </fieldset>
        </form>
      </div>
    );
  }
}

export default DecodeRawTransaction;
