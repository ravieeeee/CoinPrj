import React, { Component } from 'react';

import Title from './Title';
import CoinTable from './CoinTable';

export default class Content extends Component {
  render() {
    return (
      <main>
        <Title />
        <CoinTable />
      </main>
    );
  }
}