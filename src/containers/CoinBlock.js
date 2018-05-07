import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import famousCoins from '../coinInfor/famousCoins';
import { fetchPrice } from '../actions/price';

const baseImgUrl = 'https://www.cryptocompare.com/media/';
const imageUrls = ['19633/btc.png', '20646/eth_logo.png', '19972/ripple.png', '19782/litecoin-logo.png', '1383652/eos_1.png', '19969/xmr.png', '20026/dash.png'];
const fullNames = ['Bitcoin', 'Ethereum', 'Ripple', 'Litecoin', 'EOS', 'Monero', 'Dashcoin'];

class CoinBlock extends Component {
  componentDidMount() {
    setInterval(() => {
      this.props.fetchPrice(famousCoins);
    }, 2000);
  }

  render() {
    return (
      <div className={this.props.coinName}>
        <Link to={`/${this.props.coinName}`}>
          <img src={baseImgUrl + imageUrls[famousCoins.indexOf(this.props.coinName)]} className='coinblock-img' alt={`${this.props.coinName}`} />
          <div className='row'>
            <div className="col">
              <h4 className='coinName'>{fullNames[famousCoins.indexOf(this.props.coinName)]}</h4>
            </div>
            <div className="col coin-short-name">
              <h5 className='name'>{this.props.coinName}</h5>
            </div>
          </div>
          <div className='row coin-price'>
            <div className='col'>
              <h4>1 {this.props.coinName} = {this.props.krw[famousCoins.indexOf(this.props.coinName)]} 원</h4>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    krw: state.coin.data
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPrice }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinBlock);