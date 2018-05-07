import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Treebeard } from 'react-treebeard';
import Alert from 'react-s-alert';

import data from '../coinInfor/index';
import Menu from '../components/BurgerMenu';
import Graph from './Graph';
import famousCoins from '../coinInfor/famousCoins';

var coinValue = 0;

class CoinInfo extends Component {
  constructor(props){
    super(props);
    this.state = {};
    this.onToggle = this.onToggle.bind(this);
  }

  onToggle(node, toggled){
    if (this.state.cursor) {
      var cursor = {...this.state.cursor};
      cursor.active = false;
      this.setState({cursor});
    }
    node.active = true;
    if (node.children) {node.toggled = toggled;}
    this.setState({cursor: node});
  }

  alertPriceChange(newPrice) {
    Alert.warning(
      `<h3>${newPrice}원</h3><h6>${new Date()}</h6>`, 
      {
        position: 'bottom-left',
        html: true,
        effect: 'slide',
        beep: 'http://s-alert-demo.meteorapp.com/beep.mp3',
        timeout: 'none',
        offset: 100
      }
    );
  }

  render() {
    const { coinName } = this.props.match.params;

    if (coinValue !== this.props.krw[famousCoins.indexOf(coinName)]) {
      coinValue = this.props.krw[famousCoins.indexOf(coinName)];
      if (coinValue !== undefined && coinValue !== 0) {
        this.alertPriceChange(coinValue);
      }
    }
    
    return (
      <div>
        <Menu />
        <main>
          <h2>{coinName}</h2>
          <div className='coinText'>
            <Treebeard data={data[coinName]} onToggle={this.onToggle}/>
          </div>
        </main>
        <Graph coinName={coinName} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    krw: state.coin.data
  };
}

export default connect(mapStateToProps)(CoinInfo);