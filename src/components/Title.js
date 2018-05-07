import React, { Component } from 'react';

export default class Title extends Component {
  render() {
    return (
      <div className='titleDiv'>
        <h1>Coin</h1>
        <h5>“You can basically put a bank in your pocket… That’s pretty amazing.”</h5>
        <h6>– Gavin Andresen, Chief Scientist, The Bitcoin Foundation</h6>
      </div>
    );
  }
}