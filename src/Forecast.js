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
            loading: true
        }
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
                  loading: false
              }
          })  
        }.bind(this))
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
            <div id='forecast-container'>                
                {forecast.map((day,index) => {
                    const icon = require('./images/weather-icons/' + day.icon + '.svg');
                    const date = moment().add(index, 'day').format('dddd, MMM D');
                    return (
                        <div key={index} className='daily-forecast'>
                            <img src={icon} alt={day.main} />
                            <h2>{date}</h2>
                        </div>
                    )
                })}                
            </div>
            </div>
        )
    }
}

module.exports = Forecast;