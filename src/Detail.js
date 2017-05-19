import React, {Component} from 'react'
var moment = require('moment');
class Detail extends Component {
  render() {
    console.log(this.props);
    var state = this.props.location.state;
    var city = this.props.match.params.city;
    var humidity = state.humidity;
    var min = parseFloat(state.temp.min) - 273.15;
    var max = parseFloat(state.temp.max) - 273.15;
    var weather = state.weather[0].description;
    var dt = state.dt;
    const icon = require('./images/weather-icons/' + state.weather[0].icon + '.svg');
    return (
      <div id='weather-detail'>
        <img className='weather-icon' src={icon} alt={weather} />
        <p>{moment.unix(dt).format('dddd, MMM D')}</p>
        <p>{city}</p>          
        <p>{weather}</p>
        <p>Min temp: {min.toFixed(2)} degrees</p>
        <p>Max temp: {max.toFixed(2)} degrees</p>    
        <p>Humidity: {humidity}</p>
      </div>
    )
  }
}

module.exports = Detail;