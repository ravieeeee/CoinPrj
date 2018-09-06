import React, { Component } from 'react';
import _ from 'lodash';

import Coin from '../containers/CoinBlock';
import famousCoins from '../coinInfor/famousCoins';

export default class CoinTable extends Component {
  renderCoinBlock(idx) {
    return (
      <td key={famousCoins[idx]}>
        <Coin coinName={famousCoins[idx]} />
      </td>
    );
  }

  render() {
    return (
      <div className='table-coin'>
        <table>
          <tbody>
            <tr>
              {_.range(3).map(idx => this.renderCoinBlock(idx))}
            </tr>
            <tr>
              {this.renderCoinBlock(3)}
            </tr>
            <tr>
              {_.range(4,7).map(idx => this.renderCoinBlock(idx))}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}