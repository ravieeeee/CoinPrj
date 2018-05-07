import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CanvasJS from '../components/CanvasJS';
import { fetchPrice } from '../actions/price';
import famousCoins from '../coinInfor/famousCoins';

class Graph extends Component {
  componentDidMount() {
    let dataPoints = [];
    let dpsLength = 0;

    let chart = new CanvasJS.Chart("chartContainer", {
      exportEnabled: true,
      title: {
        text: this.props.coinName + ' 실시간 가격변동'
      },
      axisX: {  
        valueFormatString: 'HH:mm:ss'
      },
      axisY: {
        includeZero: false
      },
      data: [{
        type: "spline",
        dataPoints : dataPoints,
      }]
    });

    dataPoints.push({x: new Date(), y: 0});
    dpsLength = dataPoints.length;
    chart.render();
    
    setInterval(() => {
      chart.title.options.text = this.props.coinName + ' 실시간 가격변동';
      this.props.fetchPrice(famousCoins);

      if (this.props.krw === undefined) {
        dataPoints.push({
          x: new Date(),
          y: 0
        });
      } else {
        dataPoints.push({
          x: new Date(),
          y: this.props.krw[famousCoins.indexOf(this.props.coinName)]
        });
      }
      dpsLength++;

      if (dpsLength > 20) {
        dataPoints.shift();				
      }
      chart.render();
    }, 1000);
  }
  
  render() {
    return (
      <div className="App">
        <div id="chartContainer" />
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
  return bindActionCreators({fetchPrice}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Graph);