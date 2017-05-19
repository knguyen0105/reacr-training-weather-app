import React, { Component } from 'react';

var api = require('./utils/api');
var qs = require('query-string');
var moment = require('moment');

class Forecast extends Component {

    constructor(props) {
        super(props);
        this.state = {
            city: null,
            forecast: null, 
            loading: true,
            
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        var city = qs.parse(this.props.location.search).city;
        console.log(city);
        api.getFiveDaysForecast(city).then(function(data) {
            console.log(data);
          this.setState(function() {              
              return {
                  city: city,
                  forecast: data,
                  loading: false,
                  
              }
          })  
        }.bind(this))
    }

    handleClick(detail) {
        console.log(detail);
        this.props.history.push({
            pathname: '/details/' + this.state.city,
            state: detail
        })
  }

    render() {

        var city = this.state.city;
        var forecast = this.state.forecast;
        var loading = this.state.loading;
        if (loading === true) {
            return <p>Loading!</p>
        }
        
        return (
            <div>                        
            <h1 id='forecast-city'>{city}</h1>
            <div id='forecast-container' >                
                {forecast.map((day,index) => {
                    const icon = require('./images/weather-icons/' + day.weather[0].icon + '.svg');                    
                    return (
                        <div key={index} 
                            className='daily-forecast' 
                            onClick={this.handleClick.bind(this, day)}
                        >
                            <img className='weather-icon' src={icon} alt={day.weather[0].main} />
                            <h2>{moment.unix(day.dt).format('dddd, MMM D')}</h2>
                        </div>
                    )
                })}                
            </div>
            </div>
        )
    }
}

module.exports = Forecast;