import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import famousCoins from '../coinInfor/famousCoins';

export default class BurgerMenu extends Component {
  renderMenu(idx) {
    return <Link key={famousCoins[idx]} className='menu-item' to={`/${famousCoins[idx]}`}>{famousCoins[idx]}</Link>;
  }
  
  render() {
    return (
      <Menu>
        <Link className="menu-item" to='/'>Home</Link>
        <br />
        {_.range(famousCoins.length).map(idx => this.renderMenu(idx))}
      </Menu>
    );
  }
}
