import React, { Component } from 'react';

import Menu from './BurgerMenu';
import Content from './Content';

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Content />
      </div>
    );
  }
}