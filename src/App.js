import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Alert from 'react-s-alert';

import './index.css';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

import Main from './components/MainPage';
import CoinInfo from './containers/CoinInfo';

export default class App extends Component {
  render() {
    Alert.closeAll();

    return (
      <div>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/:coinName' component={CoinInfo} />
        </Switch>
        <Alert stack={{limit: 3}} />
      </div>
    );
  }
}
